<template>
  <v-app>
    <v-navigation-drawer location="right" app> </v-navigation-drawer>
    <v-app-bar height="40" class="main-header" density="compact" app>
      <v-app-bar-nav-icon>
        <Icon name="game-icons:soccer-kick"></Icon>
      </v-app-bar-nav-icon>
      <v-app-bar-title class="main-title">
        <span class="text-red-lighten-4">gol</span>
        <span class="text-red-lighten-5">gol!</span>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn
        id="facebook-icon"
        type="button"
        title="Icon facebook"
        aria-label="Icon facebook"
        icon
      >
        <Icon name="entypo-social:facebook" aria-label="facebook icon" />
      </v-btn>
      <v-btn id="light-icon" type="button" title="light button" icon>
        <Icon
          name="material-symbols:light-mode-sharp"
          aria-label="light icon"
        />
      </v-btn>
    </v-app-bar>
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <slot />
      </v-container>
    </v-main>
    <v-footer app></v-footer>
  </v-app>
</template>

<script lang="ts" setup></script>
<style>
.main-header {
  min-width: 100vw;
}
</style>
