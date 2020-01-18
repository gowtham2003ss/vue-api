<template>
  <v-dialog max-width="600px" v-model="dialog">
    <v-btn flat slot="activator" class="success">Add New Member</v-btn>
    <v-card>
      <v-card-title>
        <h2>Add a New Member</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">

          <v-text-field v-model="age" type="number" label="Age" ></v-text-field>
          <v-text-field v-model="fname" label="First Name" ></v-text-field>
          <v-text-field v-model="sname" label="Second Name" ></v-text-field>

          <v-btn flat @click="submit" class="success mx-0 mt-3">Add</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      lists:[],
      age:0,
      name:"",
      sname:"",
      dialog: false
    }
  },
  
  mounted() {
    this.lists=JSON.parse(localStorage.lists)
    // this.lists stored all values
    console.log("-->>>>>>>>>>>>>>.",JSON.parse(localStorage.lists))
    console.log("-----sssssssssssss",this.$route.params)

   
    this.age  =this.$route.params.age
    this.fname=this.$route.params.fname
    this.sname=this.$route.params.sname
  },
  updated(){
    console.log("--->>>>>>>>>")
  },
  methods: {
    submit() {
    let data={"age":this.age,"fname":this.fname,"sname":this.sname}
    this.lists.push(data)
    alert("Successfully",this.lists)
    localStorage.lists=JSON.stringify(this.lists)
    },

    adding() {
      for(var i=0;i<this.lists.length;i++){
        if (this.lists[i].age==this.age) {
          this.lists[i].fname=this.fname
          this.lists[i].sname=this.sname
          }
        localStorage.lists=JSON.stringify(this.lists)
        }
      alert("Successfully Updated",this.lists)
      console.log(this.lists)
       },
  }

}
</script>
