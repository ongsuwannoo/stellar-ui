# shadcn/ui monorepo template

This template is for creating a monorepo with shadcn/ui.

## Usage

```bash
pnpm dlx shadcn@latest init
```

## Adding components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

## Tailwind

Your `tailwind.config.ts` and `globals.css` are already set up to use the components from the `ui` package.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from '@workspace/ui/components/button';
```

## Running with Docker

To run the project using Docker, follow these steps:

1. **Development Mode**:
   Use the `docker-compose.yaml` file to start the development environment:

   ```bash
   docker-compose up
   ```

   This will start the app on port `3000` with live-reload enabled.

2. **Production Mode**:
   Build and run the production image:

   ```bash
   docker build -t shadcn-ui-app -f docker/Dockerfile.production .
   docker run -p 3000:3000 shadcn-ui-app
   ```

   This will start the app on port `3000` in production mode.
