import { StorybookConfig } from '@storybook/vue3-vite';
import path from 'path';

import { getConfig, viteFinalFactory } from '../utils/storybook/main';
import { TargetName } from '../utils/targets';

const framework: any = 'yarn';

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
