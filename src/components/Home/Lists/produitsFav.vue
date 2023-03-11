<template>
    <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="300"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      cover
      height="150" width="400"
      src="https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ></v-img>

    <v-card-item>
      <v-card-title>
        Merlot - Vin Rouge
        <v-icon color="pink" size="20" icon="mdi-heart"></v-icon>
      </v-card-title>

      <v-card-subtitle>
        <v-icon
          color="error"
          icon="mdi-liquor"
          size="small"
        ></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
      </v-row>

      <div class="my-4 text-subtitle-1">
        Ar 35 000
      </div>

      <div>Descriptions kely...</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>
    <div class="fa">
      <v-btn @click="adding()" prepend-icon="mdi-cart" variant="text">Commander</v-btn>
    </div>
</v-card>
</template>

<script>
    export default
    {
        data(){
            return{
                itemcounts:0
            }
        },
        name: 'ProduitsListFav',
        methods: 
        {
            adding()
            {
                this.itemcounts++,
                console.log(this.itemcounts)
            },
        }
    }
</script>
