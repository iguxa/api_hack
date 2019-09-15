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
import axios from 'axios';
import VoteListItem from "./VoteListItem";

export default {
  props: {
      pageSize: {Number, default: 20}
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
            axios.get('http://localhost:85/api/votes', {
              headers: {
                Authorization: '9f6cbd24b80c695d849f2930315ad22ea90cab9f065da8cb1b2e98723f2b323f'
              }
            })
            .then(function (response) {
              resolve(response.data.data);
            })
            .catch(function (error) {
              console.log(error);
            });
          });
      },
  },
    mounted() {
        this.reload();
    }
};
</script>
