<template>
  <div class="lists">
    <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://images.unsplash.com/photo-1535869462434-f92cc30bf40c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
      Antananarivo - Madagascar
    </v-card-title>

    <v-card-subtitle>
      descri...
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        variant="text"
      >
        Voir détails
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis asperiores provident, pariatur harum illum quos maiores. Cum nesciunt facilis totam repellat aperiam cupiditate suscipit iste qui itaque! Ipsum, voluptas soluta.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </div>
</template>

<script>
  export default {
    name: 'SnackBar',
    data: () => ({
      show: false,
    }),
  }
</script>