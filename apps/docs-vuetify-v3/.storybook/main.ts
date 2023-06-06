import { StorybookConfig } from '@storybook/vue3-vite';
import path from 'path';

import { getConfig, viteFinalFactory } from '@dsfrc/docs/utils/storybook/main';
import { TargetName } from '@dsfrc/docs/utils/targets';

const framework: TargetName = 'vuetify-v3';

const commonConfig = getConfig(framework);

const config: StorybookConfig = {
  ...commonConfig,
  framework: {
    ...((commonConfig.framework as object) || {}),
    name: '@storybook/vue3-vite',
    options: {},
  },
  core: {
    ...(commonConfig.core || {}),
    builder: '@storybook/builder-vite',
  },
  viteFinal: viteFinalFactory({
    framework: framework,
    alias: [
      {
        find: '@/util',
        replacement: path.resolve(__dirname, '../stories/framework/util'),
      },
    ],
  }),
};

export default config;
