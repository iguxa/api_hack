<template>
  <v-card>
    <v-card-title>
      <div>{{item.title}}</div>
      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
      <div class="flex-grow-1"></div>
      <v-btn class="ma-2" text icon color="red lighten-2">
        <v-icon>mdi-alarm</v-icon>
      </v-btn>
    </v-card-title>

    <v-expand-transition>
      <div v-show="show">
        <v-card-text>I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>
      </div>
    </v-expand-transition>
    <v-card-text class="pt-0">
      <span class="green--text">Active</span>
    </v-card-text>

    <v-card-actions>
      <v-btn text @click="goToDetails">Details</v-btn>

      <div class="flex-grow-1"></div>
      <v-list-item>
        <v-row align="center" justify="end">
          <v-icon class="ma-2" color="blue lighten-2">mdi-thumb-up</v-icon>
          <span class="subheading mr-2">256</span>
          <v-icon class="ma-2" color="red lighten-2">mdi-thumb-down</v-icon>
          <span class="subheading">45</span>
        </v-row>
      </v-list-item>
    </v-card-actions>

    <v-progress-linear color="light-blue" height="10" value="10" striped></v-progress-linear>
  </v-card>
</template>

<script>
export default {
  props: {
    item: { Object }
  },
  data: () => ({
    show: false
  }),
  methods: {
    goToDetails() {
      this.$router.push({ name: "vote", params: { id: "1" } });
    }
  }
};
</script>
