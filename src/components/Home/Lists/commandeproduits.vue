
<template>
    <div>
        <v-card
    class="mx-auto"
    max-width="300"
  >
    <v-list
      :items="items"
      item-value="count"
      >
      <div class="v-container" id="commandIndex">
        <div class="de">
        <h3>{{ $store.state.command[0].name }}</h3>
        <v-icon size="25" icon="mdi-bottle-wine"></v-icon>
      </div>
      <div style="display: flex; justify-content: space-between;">
        <p>{{ $store.state.command[0].prix }} Ar</p>
        <v-btn size="10" variant="text" icon="mdi-close"></v-btn>
      </div>
      </div>
    </v-list>
      
  </v-card>
    </div>
</template>

<script>
import { mapState } from 'vuex';

    export default
    {

        name: 'CommandeList',
        data: () => ({
            items: [
            {
                count: 0,
            },
        ],
    }),
    methods: {},
    computed: mapState(
      {
        prix: state => state.prix
      }),
    }
</script>

<style scoped>
  .de
  {
    display: flex;
  }
</style>
