import { create } from '@storybook/theming/create';

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
  fontBase: 'Verdana, sans-serif',
  fontCode: 'monospace',
  brandTitle: `Storybook de l'État`,
  brandUrl: './',
  brandImage: 'https://storybook.js.org/images/placeholders/350x150.png', // TODO
  brandTarget: '_self',
  appBorderRadius: 0,
  inputBorderRadius: 0,
  // gridCellSize: xx,
};

const lightVariables: ThemeVars = {
  ...commonVariables,
  base: 'light',
  colorPrimary: 'green',
  colorSecondary: 'blue',
  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#585C6D',

  // Sidebar
  textColor: 'red',
  textInverseColor: '#ffffff',
  // textMutedColor?: string;

  // buttonBg?: string;
  // buttonBorder?: string;
  // booleanBg?: string;
  // booleanSelectedBg?: string;

  // Toolbar default and active colors
  barTextColor: 'green',
  barSelectedColor: 'purple',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: 'purple',
  inputTextColor: 'red',

  // gridCellSize?: number;
};

export const lightTheme = create(lightVariables);

const darkVariables: ThemeVars = {
  ...commonVariables,
  base: 'dark',
  // Typography
  fontBase: 'Verdana, sans-serif',
  fontCode: 'monospace',

  brandTitle: 'My custom Storybook',
  brandUrl: './',
  brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  brandTarget: '_self',

  //
  colorPrimary: '#3A10E5',
  colorSecondary: 'red',

  // UI
  appBg: '#ff0000',
  appContentBg: '#ff0000',
  appBorderColor: '#585C6D',
  appBorderRadius: 4,

  // Text colors
  textColor: '#10162F',
  textInverseColor: '#ffffff',
  // textMutedColor?: string;

  // buttonBg?: string;
  // buttonBorder?: string;
  // booleanBg?: string;
  // booleanSelectedBg?: string;

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,

  // gridCellSize?: number;
};

export const darkTheme = create(darkVariables);
