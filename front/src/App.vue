<template>
  <v-app>
    <v-app-bar app v-if="$route.name!=='login'">
      <v-toolbar-title class="headline text-uppercase">
        <span>Vote system</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link :to="{name:'about'}">About</router-link>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
