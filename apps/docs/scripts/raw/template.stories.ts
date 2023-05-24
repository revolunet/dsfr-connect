import dsfrStyle from '@gouvfr/dsfr/dist/dsfr/dsfr.min.css?inline';
import dsfrScript from '@gouvfr/dsfr/dist/dsfr/dsfr.nomodule.min.js?raw';
import dsfrUtilityStyle from '@gouvfr/dsfr/dist/utility/utility.min.css?inline';
import { withThemeByDataAttribute } from '@storybook/addon-styling';
import { Meta, StoryFn } from '@storybook/html';

import componentHtml from './index.html?raw';

export default {
  title: '{{framework}}/{{component}}',
  decorators: [
    (story) => {
      // Import the style and script here to not pollute other framework stories
      const styleElement = document.createElement('style');
      styleElement.textContent = dsfrStyle;
      const utilityStyleElement = document.createElement('style');
      utilityStyleElement.textContent = dsfrUtilityStyle;

      const scriptElement = document.createElement('script');
      scriptElement.innerHTML = dsfrScript;

      return `${styleElement.outerHTML}${utilityStyleElement.outerHTML}${story()}${scriptElement.outerHTML}`;
    },
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-fr-theme',
    }),
  ],
  render: ({ label, ...args }) => {
    return componentHtml;
  },
} as Meta<any>;

export const Default = {} as StoryFn<any>;
