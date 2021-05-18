<template>

<v-app>
  <v-row>
    <v-col
        cols="12"
        sm="6"
        offset-sm="3"
    >
      <v-card height="">
        <v-card-title class="blue white--text">
          <span class="headline">Nutri'To</span>

          <v-spacer></v-spacer>

          <v-menu
              bottom
              left
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  dark
                  icon
                  v-bind="attrs"
                  v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item>
                <router-link to="/"><v-list-item-title><p style="color : black; text-decoration: none">Accueil</p></v-list-item-title></router-link>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-card-title>


      </v-card>
    </v-col>
  </v-row>
    <v-main>
      <router-view/>
    </v-main>
  <v-footer
    dark
  >
    <v-card-text ><p style="text-align: center">@Copyright Thomas SIMON - 2021</p></v-card-text>

  </v-footer>
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
