<template>
  <v-container
          class="pa-2"
          fluid
  >
    <v-list-item>
      <v-row
              align="center"
              justify="end"
      >
        <v-switch
                v-model="all"
                label="Show all"
        ></v-switch>
      </v-row>
    </v-list-item>
    <v-row>
      <v-col
              v-for="item in items"
              :key="item.id"
              :cols="12"
              md="6"
      >
        <vote-list-item :item="item"></vote-list-item>
      </v-col>
    </v-row>
    <div class="text-center pa-10">
      <v-btn @click="loadNext" v-if="hasNext">Show more</v-btn>
    </div>
  </v-container>
</template>

<script>
import VoteListItem from "./VoteListItem";

export default {
  props: {
      pageSize: {Number, default: 10}
  },
  components: {VoteListItem},
  data: () => ({
    items: [],
    all: false,
    nextPage: 1,
    hasNext: true,
  }),
  watch: {
      all() {
          this.reload();
      }
  },
  methods: {
      reload() {
          this.hasNext = 1;
          this.loadPage(1).then(items => {
              this.items = items;
              this.hasNext = items.length>=this.pageSize;
          });
      },
      loadNext() {
          this.loadPage(this.nextPage).then((items) => {
              this.nextPage++;
              this.hasNext = items.length>=this.pageSize;
              items.forEach(item => {
                  this.items.push(item);
              });
          });
      },
      loadPage(page) {
          return this.fetch(this.makeFilter(), page);
      },
      makeFilter() {
          let filter = {};
          if(!this.all) {
              filter.active = true;
          }
          return filter;
      },
      fetch(filter = {}, page = 1, pageSize = null) {
          if(!pageSize) {
              pageSize = this.pageSize;
          }
          return new Promise((resolve) => {
              if(typeof(filter.active)!=='undefined') {
                  if(filter.active) {
                      resolve([
                          { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
                          { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
                          { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
                      ]);
                  } else {
                      resolve([
                          { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
                          { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
                          { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
                          { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
                          { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
                      ]);
                  }
              }
              resolve([
                  { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
                  { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
                  { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
                  { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
                  { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
                  { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
                  { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
                  { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
                  { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
                  { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
              ]);
          });
      },
  },
    mounted() {
        this.reload();
    }
};
</script>
