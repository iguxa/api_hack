<template>
  <v-container class="pa-2" fluid>
    <v-list-item>
      <v-row align="center" justify="end">
        <v-switch v-model="all" label="Show all"></v-switch>
      </v-row>
    </v-list-item>
    <v-row>
      <v-col v-for="item in items" :key="item.id" :cols="12" md="6">
        <vote-list-item :item="item"></vote-list-item>
      </v-col>
    </v-row>
    <div class="text-center pa-10">
      <v-btn>Show more</v-btn>
    </div>
  </v-container>
</template>

<script>
import VoteListItem from "./VoteListItem";

export default {
  components: { VoteListItem },
  data: () => ({
    items: [
      {
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 12
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 6
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6
      }
    ],
    all: false
  })
};
</script>
