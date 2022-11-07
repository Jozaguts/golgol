import { createVuetify, ThemeDefinition } from "vuetify";
import {
  VApp,
  VNavigationDrawer,
  VAppBar,
  VAppBarTitle,
  VBtn,
  VFooter,
  VSpacer,
  VMain,
  VTable,
  VTextField,
  VContainer,
  VRow,
  VCol,
  VAppBarNavIcon,
  VBanner,
  VBannerText,
} from "vuetify/components";
import { Ripple } from "vuetify/directives";

const light: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#f6f8f6",
    surface: "#f6f8f6",
    primary: "#8faf89",
    "primary-darken-1": "#8faf89",
    secondary: "#f44336",
    "secondary-darken-1": "#013939",
    error: "#f44336",
    info: "#1a1e25",
    success: "#579b5e",
    warning: "#d58b26",
  },
};
const dark: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#000",
    surface: "#1a1e25",
    primary: "#726d7d",
    "primary-darken-1": "#8297b0",
    secondary: "#8faf89",
    "secondary-darken-1": "#013939",
    error: "#f44336",
    info: "#1a1e25",
    success: "#579b5e",
    warning: "#d58b26",
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components: {
      VApp,
      VNavigationDrawer,
      VAppBar,
      VAppBarTitle,
      VBtn,
      VFooter,
      VSpacer,
      VMain,
      VTable,
      VTextField,
      VContainer,
      VRow,
      VCol,
      VAppBarNavIcon,
      VBanner,
      VBannerText,
    },
    directives: {
      Ripple,
    },
    theme: {
      defaultTheme: "dark",
      themes: {
        light,
        dark,
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
});
