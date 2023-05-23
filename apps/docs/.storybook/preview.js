import { withThemeByDataAttribute } from '@storybook/addon-styling';

import '@dsfrc/dsfr-connect/src/bootstrap-v5/index.scss';

const preview = {
  parameters: {
    options: {
      showPanel: false,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: false,
      hideNoControlsWarning: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
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
