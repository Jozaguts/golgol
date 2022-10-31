<script lang="ts" setup>
import { vAutoAnimate } from "@formkit/auto-animate";
const scrollComponent = ref(null);
const { data } = await useAsyncData("games", () =>
  queryContent("/games").findOne()
);
const rawGames = toRaw(data.value.body);
const initialGames = ref(20);
const getGames = () => {
  const ret = useTake(rawGames, initialGames.value);
  return ret;
};
const games = ref(getGames());

const loadMorePosts = () => {
  initialGames.value += 20;
  games.value = [];
  const newPosts = getGames();
  games.value.push(...newPosts);
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
const handleScroll = () => {
  const element = scrollComponent.value;
  if (element.getBoundingClientRect().bottom < window.innerHeight) {
    loadMorePosts();
  }
};
</script>
<template>
  <div>
    <v-text-field
      disabled
      label="buscador"
      variant="underlined"
      autofocus
    ></v-text-field>
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
      <tbody ref="scrollComponent" v-auto-animate>
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
          } in games"
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
