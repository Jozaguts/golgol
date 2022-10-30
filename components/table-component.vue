<script lang="ts" setup>
const search = ref("");
const { data } = await useAsyncData("games", () =>
  queryContent("/games").findOne()
);
const dataComputed = computed(() => {
  const today = new Date();
  return data.value.body
    .map((item) => {
      const time = item.date.split(":");
      item.timestamp = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        time[0],
        time[1],
        0
      ).getTime();
      return item;
    })
    .filter((item) => {
      return today.getTime() < item.timestamp;
    })
    .sort((a, b) => a.timestamp - b.timestamp);
});
</script>
<template>
  <div>
    <v-text-field
      v-model="search"
      label="Buscar"
      variant="underlined"
      autofocus
    ></v-text-field>
    {{ search }}
    <v-table fixed-header density="compact" :hover="true">
      <thead>
        <tr>
          <th class="text-left">Hora</th>
          <th class="text-left"></th>
          <th class="text-left">Partido</th>
          <th class="text-left">Idioma</th>
          <th class="text-left">Canal</th>
          <th class="text-left">HD</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="{
            date,
            flag,
            base_title_1,
            base_title_2,
            href,
            lang,
            name_channel,
            href_channel,
            href_hd,
          } in dataComputed"
          :key="date"
        >
          <td>{{ date }}</td>
          <td><div :class="flag"></div></td>
          <td>
            {{ base_title_1 }}
            <a :href="href" target="_blank" rel="nofollow"
              ><b>{{ base_title_2 }}</b></a
            >
          </td>
          <td>{{ lang }}</td>
          <td>
            <v-btn
              :href="href_channel"
              variant="text"
              ripple
              target="_blank"
              rel="nofollow"
              size="small"
            >
              <small v-if="name_channel">{{ name_channel }}</small>
              <Icon v-else name="material-symbols:connected-tv-outline" />
            </v-btn>
          </td>
          <td>
            <v-btn
              :href="href_hd"
              target="_blank"
              rel="nofollow"
              variant="text"
              size="small"
            >
              <Icon name="clarity:cursor-hand-click-line" />
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
