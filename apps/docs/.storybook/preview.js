import { withThemeByDataAttribute } from '@storybook/addon-styling';

import '@dsfrc/dsfr-connect/src/bootstrap-v5/index.scss';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    hideNoControlsWarning: true,
    controls: {
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
