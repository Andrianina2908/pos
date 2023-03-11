
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
      <div class="v-container">
        <div class="de">
        <h3>{{ $store.state.command[0].name }}</h3>
        <v-icon size="25" icon="mdi-bottle-wine"></v-icon>
      </div>
      <p>{{ $store.state.command[0].prix }} Ar</p>
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
    computed: mapState(
      {
        prix: state => state.prix
      }),
      commandy()
      {

      }
    }
</script>

<style scoped>
  .de
  {
    display: flex;
  }
</style>
