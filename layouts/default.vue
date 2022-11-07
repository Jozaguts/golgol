<template>
  <v-app>
    <!--    <v-navigation-drawer location="right" :model-value="true" app></v-navigation-drawer>-->
    <v-app-bar height="80" class="main-header" density="compact" app>
      <v-app-bar-nav-icon>
        <Icon
          name="game-icons:soccer-kick"
          size="80"
          aria-label="gol gol icon"
        ></Icon>
      </v-app-bar-nav-icon>
      <v-app-bar-title class="main-title">
        <span class="font-weight-bold">gol</span>
        <span class="font-weight-bold">gol!</span>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <div class="mx-10">
        <v-btn
          id="facebook-icon"
          type="button"
          title="Icon facebook"
          aria-label="Icon facebook"
          icon
          disabled
        >
          <Icon
            size="35"
            name="entypo-social:facebook"
            aria-label="facebook icon"
          />
        </v-btn>
        <v-btn
          id="light-icon"
          type="button"
          title="light button"
          icon
          @click="toggleTheme"
        >
          <Icon
            v-if="theme.current.value.dark"
            name="material-symbols:light-mode-sharp"
            aria-label="light icon"
            size="35"
          />
          <Icon
            v-else
            name="material-symbols:nightlight-outline"
            aria-label="light off icon"
          />
        </v-btn>
      </div>
    </v-app-bar>
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container>
        <!--        <BannerComponent />-->
        <slot :key="$router.currentRoute.fullPath" />
      </v-container>
    </v-main>
    <v-footer app></v-footer>
  </v-app>
</template>

<script lang="ts" setup>
import { useTheme } from "vuetify";
const theme = useTheme();
const toggleTheme = () =>
  (theme.global.name.value = theme.global.current.value.dark
    ? "light"
    : "dark");
</script>
<style>
.main-header {
  min-width: 100vw;
}
</style>
