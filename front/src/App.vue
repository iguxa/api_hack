<template>
  <v-app>
    <v-app-bar app v-if="$route.name!=='login'">
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
      <router-link :to="{name:'about'}" class="mr-2">About</router-link>
      <router-link :to="{name:'login'}" class="mr-2">Login</router-link>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';

export default {
  name: "App",
  components: {
    //HelloWorld,
  },
  data: () => ({
    //
  })
};
</script>
