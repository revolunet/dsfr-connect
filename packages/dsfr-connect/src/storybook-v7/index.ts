import { create } from '@storybook/theming/create';

import { darkColors, lightColors } from '../common';

// Since not exported by Storybook
export interface ThemeVars {
  base: 'light' | 'dark';
  colorPrimary?: string;
  colorSecondary?: string;
  appBg?: string;
  appContentBg?: string;
  appBorderColor?: string;
  appBorderRadius?: number;
  fontBase?: string;
  fontCode?: string;
  textColor?: string;
  textInverseColor?: string;
  textMutedColor?: string;
  barTextColor?: string;
  barSelectedColor?: string;
  barBg?: string;
  buttonBg?: string;
  buttonBorder?: string;
  booleanBg?: string;
  booleanSelectedBg?: string;
  inputBg?: string;
  inputBorder?: string;
  inputTextColor?: string;
  inputBorderRadius?: number;
  brandTitle?: string;
  brandUrl?: string;
  brandImage?: string;
  brandTarget?: string;
  gridCellSize?: number;
}

const commonVariables: ThemeVars = {
  base: 'light',
  fontBase: `Marianne, arial, sans-serif`,
  fontCode: 'monospace',
  brandTitle: `Storybook de l'État`,
  brandUrl: './',
  brandImage: 'https://storybook.js.org/images/placeholders/350x150.png', // TODO
  brandTarget: '_self',
  appBorderRadius: 0,
  inputBorderRadius: 0,
  // gridCellSize: xx,
};

lightColors.decisions.text.inverted.grey.default;

const lightVariables: ThemeVars = {
  ...commonVariables,
  base: 'light',
  colorPrimary: lightColors.options.blueFrance._950_100.default,
  colorSecondary: lightColors.options.blueFrance.sun113_625.default,
  appBg: lightColors.options.grey._1000_50.default,
  appContentBg: lightColors.options.grey._1000_100.default,
  appBorderColor: lightColors.decisions.border.default.grey.default,
  textColor: lightColors.decisions.text.default.grey.default,
  textInverseColor: lightColors.decisions.text.inverted.grey.default,
  textMutedColor: lightColors.decisions.text.label.grey.default, // Used for placeholders for example
  buttonBg: lightColors.decisions.background.actionHigh.blueFrance.default,
  buttonBorder: lightColors.decisions.border.actionHigh.blueFrance.default,
  booleanBg: 'red',
  // booleanSelectedBg: '?',

  // Toolbar default and active colors
  // barTextColor: 'green',
  // barSelectedColor: 'purple',
  // barBg: '#ffffff',

  // Form colors
  // inputBg: '#ffffff',
  // inputBorder: 'purple',
  // inputTextColor: 'red',

  // gridCellSize?: number;
};

export const lightTheme = create(lightVariables);

const darkVariables: ThemeVars = {
  ...commonVariables,
  base: 'dark',
  // // Typography
  // fontBase: 'Verdana, sans-serif',
  // fontCode: 'monospace',

  // brandTitle: 'My custom Storybook',
  // brandUrl: './',
  // brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  // brandTarget: '_self',

  // //
  // colorPrimary: '#3A10E5',
  // colorSecondary: 'red',

  // // UI
  // appBg: '#ff0000',
  // appContentBg: '#ff0000',
  // appBorderColor: '#585C6D',
  // appBorderRadius: 4,

  // // Text colors
  // textColor: '#10162F',
  // textInverseColor: '#ffffff',
  // // textMutedColor?: string;

  // // buttonBg?: string;
  // // buttonBorder?: string;
  // // booleanBg?: string;
  // // booleanSelectedBg?: string;

  // // Toolbar default and active colors
  // barTextColor: '#9E9E9E',
  // barSelectedColor: '#585C6D',
  // barBg: '#ffffff',

  // // Form colors
  // inputBg: '#ffffff',
  // inputBorder: '#10162F',
  // inputTextColor: '#10162F',
  // inputBorderRadius: 2,

  // // gridCellSize?: number;
};

export const darkTheme = create(darkVariables);
