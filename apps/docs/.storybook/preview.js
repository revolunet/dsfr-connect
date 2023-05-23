import { withThemeByDataAttribute } from '@storybook/addon-styling';

const preview = {
  parameters: {
    options: {
      showPanel: false,
    },
    controls: {
      hideNoControlsWarning: true,
    },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-bs-theme',
    }),
  ],
};

export default preview;
