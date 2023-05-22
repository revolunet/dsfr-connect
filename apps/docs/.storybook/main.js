const path = require('path');

const config = {
  stories: [
    // Lookup wildcards should not meet a `node_modules` because due to `pnpm` symlinks everything break
    // We scoped everything in folders like `stories` and `src` in each package
    // Ref: https://github.com/storybookjs/storybook/issues/11181#issuecomment-1372243094
    path.resolve(__dirname, '../../../apps/docs/stories/**/*.stories.@(js|ts|jsx|tsx|mdx)'),
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-styling'],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  core: {
    enableCrashReports: false,
    disableTelemetry: true,
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;
