<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-data-table :headers="headers" :items="desserts" :items-per-page="15" class="elevation-1">
        <template slot="items" slot-scope="props">
          <!-- <tr @click="showAlert(props.item)"> -->
          <td>{{ props.item.login }}</td>
          <td>{{ props.item.id }}</td>
          <td>
            <img :src="props.item.avatar_url" style="width: 50px; height: 50px" />
          </td>
          <v-btn
            slot="activator"
            color="primary"
            dark
            v-on:click="detailed_view(props.item)"
          >Details</v-btn>

          <router-view></router-view>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      headers: [  
        { text: "Username", value: "login" },
        { text: "Id", value: "id" },
        { text: "Avatar", value: "avatar_url" }
      ],
      desserts: []
      // items: JSON.parse(localStorage.lists)
    };
  },
  methods: {
    ...mapActions("users", ["GET_USERS"]),
    getUsers() {
      this.GET_USERS()
        .then(response => {
          console.log("=111111111111111111111111", response.data);
          this.desserts = response.data; //pushing the the data(response data) into desserts lists
        })
        .catch(err => {
          console.log("=222222222222222222222222", err);
        });
    },
    detailed_view(data) {
      console.log(data)
      this.$router.push({ name: "details", params: data });
    }
    // showAlert(a) {
    //   if (event.target.classList.contains("btn__content")) return;
    //   alert("I am " + a.login);
    // }
  },
  mounted() {
    this.getUsers();
    // this.lists=JSON.parse(localStorage.lists)
    // console.log("-->>>>>>>>>>>>>>.",JSON.parse(localStorage.lists))
  }
};
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid #ffaa2c;
}
.project.overdue {
  border-left: 4px solid #f83e70;
}
.v-chip.complete {
  background: #3cd1c2;
}
.v-chip.ongoing {
  background: #ffaa2c;
}
.v-chip.overdue {
  background: #f83e70;
}
</style>