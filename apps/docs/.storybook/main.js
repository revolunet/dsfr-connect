/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
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
