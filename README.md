# E2E Function fixture

Minimal Studio-only demo template used to verify org-scoped Sanity Function stack provisioning.

## Workflows

This fixture includes a minimal Sanity Workflows definition in `apps/workflows`. The provisioner deploys it as part of the Workflows step.

## Deploy Studio changes

Sign in with `pnpm exec sanity login`. Then run `pnpm deploy:studio`. Vercel deploys frontends automatically when you push to `main`.
