import { Meta, StoryFn } from '@storybook/html';

import componentHtml from './index.html?raw';

export default {
  title: '{{framework}}/{{component}}',
  render: ({ label, ...args }) => {
    return componentHtml;
  },
} as Meta<any>;

export const Default = {} as StoryFn<any>;
