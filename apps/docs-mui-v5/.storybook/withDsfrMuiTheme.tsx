// import { createMuiDsfrThemeProvider } from '@codegouvfr/react-dsfr/mui';
import { startReactDsfr } from '@codegouvfr/react-dsfr/spa';
import CssBaseline from '@mui/material/CssBaseline';
import { cyan, green, pink, purple } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import ThemeProvider from '@mui/system/ThemeProvider';
import type { DecoratorFunction, Renderer } from '@storybook/types';

import { MuiDsfrThemeProvider } from '@dsfrc/dsfr-connect/src/mui-v5';

// const { MuiDsfrThemeProvider } = createMuiDsfrThemeProvider({});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

// export const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: pink['A200'],
//     },
//     secondary: {
//       main: cyan['A400'],
//     },
//     background: {
//       default: blueGrey['800'],
//       paper: blueGrey['700'],
//     },
//   },
// });

// <ThemeProvider theme={darkTheme}>
//   {/* <CssBaseline /> */}
//   <Story />
// </ThemeProvider>

startReactDsfr({
  defaultColorScheme: 'light', // force to be the same than for the decorator
  useLang: () => 'fr',
});

export const withMuiTheme: DecoratorFunction<Renderer> = (Story) => (
  <MuiDsfrThemeProvider>
    {/* <CssBaseline /> */}
    <Story />
  </MuiDsfrThemeProvider>
);
// export const withMuiTheme: DecoratorFunction<Renderer> = (Story) => (
//   <ThemeProvider theme={darkTheme}>
//     {/* <CssBaseline /> */}
//     <Story />
//   </ThemeProvider>
// );
