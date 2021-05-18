<template>
  <v-container>
    <v-row>
      <v-col v-for="(prod,i) in produit()" :key="i">
        <produit :idcat="$route.params.id " :produit="prod"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import produit from "./produit";

export default {
  name: "categorie",
  components: {produit},
  data:()=>({

  }),

  methods: {
    produit() {
      console.log(this.$store.state.bdd.categories[this.$route.params.id].produits);
      return this.$store.state.bdd.categories[this.$route.params.id].produits
    }


  },

  mounted() {

  }
}
</script>


<style scoped>

</style>