import { createVuetify } from "vuetify";
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
} from "vuetify/components";
import { Ripple } from "vuetify/directives";

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
    },
    directives: {
      Ripple,
    },
    theme: {
      defaultTheme: "dark",
    },
  });
  nuxtApp.vueApp.use(vuetify);
});
