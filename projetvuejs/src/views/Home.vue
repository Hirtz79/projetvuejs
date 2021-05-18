<template>
  <v-container>

    <!--
    <v-row>
      <v-col v-for="(cate ,i) in catego()" :key="i">
        <card :cat = "cate"/>
      </v-col>
    </v-row>
    -->
    <v-row>
      <v-col v-for="(cate,i) in categ" :key="i">
        <card :cat ="cate"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import card from "../components/card";
import axios from "../api/axios";

axios()

export default {
  name: 'Home',
  data() {
    return {
      categ: ''
    }
  },
  components: {
    card,
  },
  methods: {
    catego() {
      console.log(this.$store.state.bdd.categories);
      return this.$store.state.bdd.categories;
    }
  },

  mounted() {
    axios().get('categories?page=1')
        .then(response => this.categ = response.data['hydra:member'])
  }

}
</script>
