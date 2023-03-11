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
      <v-card-title>Merlot - Vin Rouge</v-card-title>

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
    <v-dialog
                transition="dialog-top-transition"
                width="auto"
            >
                <template v-slot:activator="{ props }">
                    <v-list-item prepend-icon="mdi-cart" title="Mes commandes" value="mycart"
                        v-bind="props"
                    ></v-list-item>
                </template>
                <template v-slot:default="{ isActive }">
                    <v-card>
                        <v-toolbar
                            title="Commander">
                            <v-btn icon="mdi-cart"></v-btn>
                        </v-toolbar>
                
                <!-- user's data      -->
                <v-card-text>
                    <div style="margin-bottom: 20px">
                        <h2>Voudriez-vous en commander pour combien?</h2>
                        <div style="display:flex; justify-content: center;">
                          <img width="350" src="../../../assets/shopping.gif">
                        </div>
                        <div style="display: flex; justify-content: center;"><h3>{{this.qun}}: </h3><h3> {{itemcounts}}</h3>
                        </div>

                        <div style="display: flex; justify-content: center;">
                          <v-btn color="primary" variant="outlined" prepend-icon="mdi-content-save" style="margin-right: 5px">Confirmer</v-btn>

                          <v-btn @click="adding" color="success" variant="outlined" prepend-icon="mdi-plus" style="margin-right: 5px">Ajouter</v-btn>
                          
                          <v-btn @click="tsyadding" color="warning" variant="outlined" prepend-icon="mdi-backspace">Effacer</v-btn>
                        </div>
                    </div>

                </v-card-text>


                    <v-card-actions class="justify-end">
                      <v-btn @click="isActive.value = false, this.itemcounts = 0, this.qun ='Quantité'" prepend-icon="mdi-backspace">Annuler mes commandes</v-btn>
                    </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>
</v-card>
</template>

<script>
    export default
    {
        data(){
            return{
                qun: 'Quantité',
                quantity: 'Quantité',
                quantitys: 'Quantités',
                itemcounts:0,
                name: {
                  template: '<h3>{{$store.getters.cammandPassed}}</h3>'
                }
            }
        },
        name: 'ProduitsList',
        methods: 
        {
            adding()
            {
                this.itemcounts++
                if(this.itemcounts > 1)
                {
                  this.qun = this.quantitys
                }else {this.qun = this.quantity}
            },
            tsyadding()
            {
                if(this.itemcounts <= 0)
                { 
                  this.itemcounts = 0
                }else {this.itemcounts--}
                if(this.itemcounts > 1)
                {
                  this.qun = this.quantitys
                }else {this.qun = this.quantity}
            },
            acceptEvent()
            {
              // this.qun
            }
        }
    }
</script>