<template>
  <v-app>
    <v-navigation-drawer location="right" app> nav </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-title><h1 class="title">GOL GOL</h1></v-app-bar-title>
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
