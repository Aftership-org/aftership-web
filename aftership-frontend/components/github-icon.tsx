import { siGithub } from "simple-icons/icons"

type GitHubIconProps = {
  className?: string
}

export function GitHubIcon({ className }: GitHubIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d={siGithub.path} />
    </svg>
  )
}
