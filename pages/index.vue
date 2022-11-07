<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h1 class="font-weight-light">
          Partidos del día
          <small class="text-caption">
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
      <v-col cols="12">
        <table-component />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup></script>
