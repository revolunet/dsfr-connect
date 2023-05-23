import { Meta, StoryFn } from '@storybook/html';

import componentStyle from '@dsfrc/dsfr-connect/src/bootstrap-v5/index.scss?inline';

import componentHtml from './index.html?raw';

export default {
  title: '{{framework}}/{{component}}',
  decorators: [
    (story) => {
      // Import the style here to not pollute other framework stories
      const styleElement = document.createElement('style');
      styleElement.textContent = componentStyle;

      return `${styleElement.outerHTML}${story()}`;
    },
  ],
  render: ({ label, ...args }) => {
    return componentHtml;
  },
} as Meta<any>;

export const Default = {} as StoryFn<any>;
