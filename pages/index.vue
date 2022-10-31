<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="font-weight-light text-white">
          Partidos del día
          <small class="text-caption text-primary">
            {{
              new Date().toLocaleDateString("es", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
              })
            }}
          </small>
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <table-component />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup></script>
