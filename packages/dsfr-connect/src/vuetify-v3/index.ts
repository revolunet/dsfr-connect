import { getColors } from '@codegouvfr/react-dsfr';
import { VuetifyOptions } from 'vuetify';

const lightColors = getColors(false);
const darkColors = getColors(true);

export function getVuetifyOptions(): VuetifyOptions {
  return {
    defaults: {
      global: {
        ripple: false,
        elevation: 0,
      },
    },
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            background: '#FFFFFF',
            surface: '#FFFFFF',
            primary: lightColors.options.blueFrance.sun113_625.default,
            secondary: lightColors.options.blueFrance.sun113_625.default,
          },
        },
        dark: {
          dark: true,
          colors: {
            background: '#2B2C28',
            surface: '#2B2C28',
            primary: '#CC3363',
            secondary: '#F7B05B',
          },
        },
      },
    },
  };
}
