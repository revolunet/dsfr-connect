import { Meta, StoryFn } from '@storybook/html';

export default {
  title: '{{framework}}/{{component}}',
  render: ({ label, ...args }) => {
    return `{{{html}}}`;
  },
} as Meta<any>;

export const Default = {} as StoryFn<any>;
