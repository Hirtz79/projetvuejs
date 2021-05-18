<template>
 <v-card>
    <v-card-title> {{cat.nom}}</v-card-title>


    <v-card-actions>
      <v-btn :to="{name : 'categorie' ,params : {id : cat.id}}">En voir plus</v-btn>
    </v-card-actions>

 </v-card>
</template>

<script>

export default {
  name: "card",
  props:{
    cat : Object
  },

  methods: {

  },
}
</script>


<style scoped>

</style>