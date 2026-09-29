# Aftership Web

Aftership is a developer performance platform that helps teams understand what changed after every deployment. It connects application telemetry with GitHub commits and deployments so developers can find performance regressions, identify their likely cause, and act before users are affected.

The product follows a simple workflow:

1. **Connect** a GitHub account and select a repository.
2. **Measure** application performance with the Aftership SDK.
3. **Diagnose** slower endpoints, increased error rates, and other regressions associated with a deployment.

## What the website will do

The web application will provide the main interface for:

- Signing in securely with GitHub
- Connecting and managing GitHub repositories
- Creating Aftership projects from selected repositories
- Viewing deployments and their associated commits
- Comparing application performance between deployments
- Detecting endpoints that became slower or more error-prone
- Investigating regressions and identifying the changes that may have caused them
- Monitoring the health and performance history of each project

The first product phase focuses on the **Connect** experience: GitHub authentication, GitHub App installation, repository selection, project creation, and a basic project dashboard. Telemetry collection and regression analysis will follow in later phases.

## Technology

- Next.js
- TypeScript
- GitHub Actions
- Docker
- Amazon ECR and EC2
- Caddy for HTTPS and reverse proxying

## Architecture

Architecture documentation will be added here.
