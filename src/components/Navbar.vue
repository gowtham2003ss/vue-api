<template>
  <nav>
      <v-btn color="white" flat @click="snackbar = false">Close</v-btn>

    <v-toolbar flat app>
      <v-toolbar-side-icon @click="drawer = drawer" class="grey--text"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">COOPON</span>
        <span>Members</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn flat color="grey">
        <span>Contact Us</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-layout column align-center>
        <v-flex class="mt-4 mb-3">
          <Popup @projectAdded="snackbar = true" />
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "./Popup";

export default {
  components: { Popup },
  data() {
    return {
      drawer: true,

      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
      ],
      snackbar: false
    };
  }
};
</script>

<style>
</style>
