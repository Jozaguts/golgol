<script lang="ts" setup>
import { vAutoAnimate } from "@formkit/auto-animate";
import { useFilter } from "#imports";

const search = ref("");
const rawData = ref("");
const defaultData = ref();
const filteredData = ref();
const today = new Date();
useAsyncData("games", () => queryContent("/games").findOne())
  .then(({ data: value }) => {
    rawData.value = value.value.body;
    return value.value.body
      .map((item) => {
        const time = item.date.split(":");
        item.timestamp = new Date(
          today.getFullYear(),
          today.getMonth() + 1,
          today.getDate(),
          time[0],
          time[1]
        ).getTime();
        return toRaw(item);
      })
      .filter((item) => {
        return today.getTime() < item.timestamp;
      })
      .sort((a, b) => a.timestamp - b.timestamp);
  })
  .then((result) => {
    filteredData.value = result;
    defaultData.value = result; // esto es para reset
  });
const reset = () => (filteredData.value = defaultData.value); // aqui se hace el reset

const debouncedFn = () => {
  if (search.value.length >= 1) {
    filteredData.value = useFilter(filteredData.value, (item) => {
      return item.base_title_2
        .toLowerCase()
        .trim()
        .startsWith(search.value.trim().toLowerCase());
    });
  } else {
    reset();
  }
};
const getGames = (number = 20) => {
  const ret = [];
  for (let i = 1; i <= number; i++) {
    ret.push(filteredData.value[i]);
  }
  return ret;
};
</script>
<template>
  <div>
    <v-text-field
      v-model="search"
      label="buscador"
      variant="underlined"
      autofocus
      @keyup="debouncedFn"
    ></v-text-field>
    <div v-auto-animate>
      <small v-if="search.length" class="text-caption text-green-lighten-2">
        Buscando...
      </small>
    </div>
    <v-table fixed-header density="compact" :hover="true">
      <thead>
        <tr>
          <th scope="col" class="text-left">Hora</th>
          <th scope="col" class="text-left"></th>
          <th scope="col" class="text-left">Partido</th>
          <th scope="col" class="text-left">Idioma</th>
          <th scope="col" class="text-left">Canal</th>
          <th scope="col" class="text-left">HD</th>
        </tr>
      </thead>
      <tbody v-auto-animate>
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
          } in getGames()"
          :key="date"
        >
          <td>{{ date }}</td>
          <td><div :class="flag"></div></td>
          <td>
            {{ base_title_1 }}
            <a :href="href" target="_blank" rel="nofollow" alt="link a partido"
              ><b>{{ base_title_2 }}</b></a
            >
          </td>
          <td>{{ lang }}</td>
          <td>
            <v-btn
              :aria-label="href_channel"
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
              :aria-label="href_channel"
              type="button"
              :href="href_hd"
              target="_blank"
              rel="nofollow"
              variant="text"
              size="small"
              :title="href_hd"
            >
              <Icon name="clarity:cursor-hand-click-line" />
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
