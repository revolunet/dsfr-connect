import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import * as labsComponents from 'vuetify/labs/components';
import 'vuetify/styles';

export default createVuetify({
  components: { components, labsComponents },
  directives,
  theme: {
    themes: {
      light: {
        dark: false,
        variables: {
          borderRadius: 0,
        },
        colors: {
          background: '#FFFFFF',
          surface: '#FFFFFF',
          primary: '#E65180',
          secondary: '#FBC27C',
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
});
