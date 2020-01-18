<template>
  <v-card class="mx-auto" max-width="344">
    <img :src="url" height="344px" />

    <v-card-title>
      <div>{{ $route.params.login }}</div>
      <span class="grey--text subtitle-1">{{ $route.params.id }}</span>
    </v-card-title>
  </v-card>
</template>


<script>
// import Dashboard from "./Dashboard.vue";

export default {
  data() {
    return {
      url: "https://avatars1.githubusercontent.com/u/165?v=4"
    };
  },
  mounted() {
    this.url = this.$route.params.avatar_url;
    console.log("-----sssssssssssss", this.$route.params);
  },
  methods: {}
};
</script>