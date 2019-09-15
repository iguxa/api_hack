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
                label="Показать все"
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
      <v-btn @click="loadNext" v-if="hasNext">Показать больше</v-btn>
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
        this.nextPage = 1;
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
            if (filter.active) {
              resolve([
                {title: 'Название конкурса', status: true, id: 1},
                {title: 'Название конкурса', status: true, id: 2},
                {title: 'Название конкурса', status: true, id: 3},
              ]);
            } else {
              resolve([
                {title: 'Название конкурса', status: false, id: 4},
                {title: 'Название конкурса', status: false, id: 5},
                {title: 'Название конкурса', status: false, id: 6},
                {title: 'Название конкурса', status: false, id: 7},
                {title: 'Название конкурса', status: false, id: 8},
                {title: 'Название конкурса', status: false, id: 9},
                {title: 'Название конкурса', status: false, id: 10},
              ]);
            }
          } else {
            resolve([
              {title: 'Название конкурса', status: true, id: 1},
              {title: 'Название конкурса', status: true, id: 2},
              {title: 'Название конкурса', status: false, id: 4},
              {title: 'Название конкурса', status: true, id: 3},
              {title: 'Название конкурса', status: false, id: 5},
              {title: 'Название конкурса', status: false, id: 6},
              {title: 'Название конкурса', status: false, id: 7},
              {title: 'Название конкурса', status: false, id: 8},
              {title: 'Название конкурса', status: false, id: 9},
              {title: 'Название конкурса', status: false, id: 10},
            ]);
          }
        });
      }
  },
    mounted() {
        this.reload();
    }
};
</script>
