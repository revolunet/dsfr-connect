import chalk, { Chalk } from 'chalk';

// import { build as bootstrapV5Build, downloadAndExtract as bootstrapV5DownloadAndExtract } from '@dsfrc/docs/scripts/bootstrap-v5/actions';
// import { build as mainBuild, downloadAndExtract as mainDownloadAndExtract } from '@dsfrc/docs/scripts/raw/actions';
// import { build as vuetifyV3Build, downloadAndExtract as vuetifyV3DownloadAndExtract } from '@dsfrc/docs/scripts/vuetify-v3/actions';

export type TargetName = 'main' | 'bootstrap-v5' | 'vuetify-v3';

export interface Target {
  name: TargetName;
  port: number;
  download: () => Promise<void>;
  extract: () => Promise<void>;
  terminalFormatter: Chalk;
}

export const mainTarget: Target = {
  name: 'main',
  port: 6006,
  download: async () => {},
  extract: async () => {},
  terminalFormatter: chalk.blue,
};

export const frameworks: Target[] = [
  {
    name: 'bootstrap-v5',
    port: 6007,
    download: async () => {},
    extract: async () => {},
    terminalFormatter: chalk.green,
  },
  {
    name: 'vuetify-v3',
    port: 6008,
    download: async () => {},
    extract: async () => {},
    terminalFormatter: chalk.yellow,
  },
];
