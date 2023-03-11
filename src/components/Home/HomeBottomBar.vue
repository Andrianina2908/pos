<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <v-layout>
      <v-bottom-navigation
        :active="active"
        color="indigo"
      >
        <v-btn id="produitlist">
          <RouterLink to="/"><v-icon>mdi-glass-wine</v-icon></RouterLink>
          Liste des produits
        </v-btn>

        <v-btn id="favoris">
          <RouterLink to="/favoris"><v-icon>mdi-heart-outline</v-icon></RouterLink>
          Favoris
        </v-btn>
 
        <v-btn id="pointvente">
          <RouterLink to="/listepointsvente"><v-icon>mdi-map-marker-outline</v-icon></RouterLink>
          Points de vente
        </v-btn>

        <v-btn id="contact">
          <RouterLink to="/favoris"><v-icon>mdi-phone-outline</v-icon></RouterLink>
          Contact
        </v-btn>
      </v-bottom-navigation>
  
    </v-layout>
  </template>

<script>
    export default
    {
        name: 'HomeBottomBar',
        data: () => ({
            tab: null,
        }),
    }
</script>