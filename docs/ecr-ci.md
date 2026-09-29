# Frontend ECR pipeline setup

The workflow in `.github/workflows/ecr.yml` verifies frontend pull requests and
pushes a production image for frontend changes on `main`. Manual runs are also
supported.

Images use immutable tags containing the commit, workflow run, and retry:

```text
054214929377.dkr.ecr.us-east-1.amazonaws.com/aftership-web:sha-<commit>-run-<run-id>-<attempt>
```

## AWS authentication

Terraform manages the GitHub OIDC provider, IAM role, and ECR-only policy. The
role trusts this immutable GitHub subject:

```text
repo:Aftership-org@335158463/aftership-web@1393657020:environment:production
```

The role can request an ECR authorization token and push images only to the
`aftership-web` repository. It can also send the AWS-managed shell document to
the production web EC2 instance and read that command's result. It has no
access to S3, other EC2 instances, or other ECR repositories.

## GitHub production environment

In **Settings → Environments**, create an environment named `production` and
restrict deployment branches to `main`.

Add these environment variables:

| Variable          | Value                                                      |
| ----------------- | ---------------------------------------------------------- |
| `AWS_ACCOUNT_ID`  | `054214929377`                                             |
| `AWS_REGION`      | `us-east-1`                                                |
| `AWS_ROLE_ARN`    | `arn:aws:iam::054214929377:role/aftership-web-github-oidc` |
| `ECR_REPOSITORY`  | `aftership-web`                                            |
| `EC2_INSTANCE_ID` | `i-0b2960c7656eda6f5`                                      |
| `CONTAINER_NAME`  | `aftership-web`                                            |
| `HOST_PORT`       | Host port used by the frontend container                   |
| `CONTAINER_PORT`  | `3000`                                                     |

No AWS access-key secrets are required. The workflow requests a short-lived
GitHub OIDC token and exchanges it for temporary AWS credentials.

## Run the pipeline

Push a frontend or workflow change to `main`, or open **Actions → Frontend CI
and ECR → Run workflow**. Pull requests run linting, type-checking, and the
application build without receiving AWS credentials or pushing an image.

After a successful image push, the workflow sends the exact immutable image URI
to the production instance through Systems Manager. The instance pulls the
image, replaces the existing container, checks the local HTTP endpoint, and
rolls back to the previous image if the health check fails.
