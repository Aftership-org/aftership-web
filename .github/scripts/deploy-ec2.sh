#!/usr/bin/env bash

set -Eeuo pipefail

image_uri="$1"
container_name="$2"
host_port="$3"
container_port="$4"
aws_region="$5"
aws_account_id="$6"
registry="${aws_account_id}.dkr.ecr.${aws_region}.amazonaws.com"
previous_image=""

cleanup() {
  docker logout "$registry" >/dev/null 2>&1 || true
  rm -f "$0"
}

rollback() {
  echo "Deployment health check failed."
  docker logs --tail 100 "$container_name" || true
  docker rm -f "$container_name" >/dev/null 2>&1 || true

  if [[ -n "$previous_image" ]]; then
    echo "Rolling back to $previous_image"
    docker run -d \
      --name "$container_name" \
      --restart unless-stopped \
      --init \
      -p "${host_port}:${container_port}" \
      "$previous_image"
  fi
}

trap cleanup EXIT

echo "Authenticating Docker with $registry"
aws ecr get-login-password --region "$aws_region" \
  | docker login --username AWS --password-stdin "$registry"

echo "Pulling $image_uri"
docker pull "$image_uri"

previous_image="$(docker inspect --format='{{.Config.Image}}' "$container_name" 2>/dev/null || true)"
docker rm -f "$container_name" >/dev/null 2>&1 || true

echo "Starting $container_name"
docker run -d \
  --name "$container_name" \
  --restart unless-stopped \
  --init \
  -p "${host_port}:${container_port}" \
  "$image_uri"

for attempt in $(seq 1 30); do
  if curl --fail --silent --show-error --max-time 3 \
    "http://127.0.0.1:${host_port}/" >/dev/null; then
    echo "Deployment healthy on host port $host_port."
    exit 0
  fi

  echo "Waiting for health check (${attempt}/30)..."
  sleep 2
done

rollback
exit 1
