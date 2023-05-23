import { Meta, StoryFn } from '@storybook/html';

export default {
  title: '{{framework}}/{{component}}',
  render: ({ label, ...args }) => {
    return `{{#each codes}}
    {{{this}}}

    {{#unless @last}}
        <br />
    {{/unless}}
{{/each}}`;
  },
} as Meta<any>;

export const Default = {} as StoryFn<any>;
