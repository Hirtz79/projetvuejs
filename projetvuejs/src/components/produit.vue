<template>
    <v-card>
      <v-img :src="produit.url"></v-img>
      <v-card-title>{{produit.titre}}</v-card-title>
      <v-card-text>
        <p>{{produit.description}}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn :to="{name: 'en_savoir_plus', params : {idcat : idcat , id: this.produit.id}}">En savoir plus</v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
export default {
name: "produit",
  data:()=>({

}),

  props:{
    produit : Object,
    idcat : String,
  },
}
</script>

<style scoped>

</style>