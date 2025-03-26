// filepath: /Users/nocgy/Documents/code/stellar-ui/shadcn-mono-1/packages/ui/.storybook/main.ts
import type { StorybookConfig } from '@storybook/react-vite';
import { join, dirname } from "path";

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  "stories": [
    "../src/components/**/*.mdx",
    "../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath("@storybook/experimental-addon-test")
  ],
  "framework": {
    "name": getAbsolutePath('@storybook/react-vite'),
    "options": {}
  }
};

export default config;
