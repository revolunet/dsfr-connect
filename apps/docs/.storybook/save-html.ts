import { withThemeByDataAttribute } from '@storybook/addon-styling';
import { Meta, StoryFn } from '@storybook/html';

// import httpVueLoader from 'http-vue-loader';
// import bootstrapScript from 'bootstrap/dist/js/bootstrap.bundle.min.js?raw';
// import componentStyle from '@dsfrc/dsfr-connect/src/bootstrap-v5/index.scss?inline';
import componentVue from './index.vue?raw';

export default {
  title: 'gallery/vuetify-v3/v-btn/prop-ripple',
  decorators: [
    (story) => {
      // Import the style and script here to not pollute other framework stories
      const styleElement = document.createElement('style');
      // styleElement.textContent = componentStyle;

      const scriptElement = document.createElement('script');
      // scriptElement.innerHTML = bootstrapScript;

      // const myComponent = httpVueLoader('./index.vue');
      console.log(4444444);
      // console.log(myComponent());

      return `

      <script src="https://unpkg.com/vue@next"></script>
      <script src="https://cdn.jsdelivr.net/npm/vue3-sfc-loader/dist/vue3-sfc-loader.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/vuetify@3.3.1/dist/vuetify.min.js"></script>
      <link href="https://cdn.jsdelivr.net/npm/vuetify@3.3.1/dist/vuetify.css" rel="stylesheet">
<div>Before</div>
<div id="salut">
</div>
<div>After</div>

<script>
const { createApp } = Vue;
const { createVuetify } = Vuetify;
console.log(22222222);
console.log(Vuetify);

const options = {
  moduleCache: {
    vue: Vue
  },
  async getFile(url) {

    const res = await fetch(url);
    if ( !res.ok )
      throw Object.assign(new Error(res.statusText + ' ' + url), { res });
    return {
      getContentData: asBinary => asBinary ? res.arrayBuffer() : res.text(),
    }
  },
  addStyle(textContent) {
    // // TODO: ... is it polluting? Probably... ignore style?
    const style = Object.assign(document.createElement('style'), { textContent });
    style.id = "coucou";
    const ref = document.querySelector('#salut');
    ref.parentElement.insertBefore(style, ref);
    console.log(style);
  },
}

const { loadModule } = window['vue3-sfc-loader'];

const vuetify = createVuetify();

const app = createApp({
  components: {
    'my-component': Vue.defineAsyncComponent( () => loadModule('/index.vue', options) )
  },
  template: '<my-component></my-component>'
});

app.use(vuetify).mount('#salut');

</script>

      ${styleElement.outerHTML}${story()}${scriptElement.outerHTML}`;
    },
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-bs-theme',
    }),
  ],
  parameters: {
    storySource: {
      source: componentVue,
    },
  },
  render: ({ label, ...args }) => {
    return componentVue;
  },
} as Meta<any>;

export const Default = {} as StoryFn<any>;
