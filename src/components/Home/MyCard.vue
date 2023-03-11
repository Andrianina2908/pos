<template>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
            <v-list-item></v-list-item>
        </v-list>
        <v-list nav>
            <!-- profil -->
            <v-dialog
                transition="dialog-top-transition"
                width="auto"
            >
                <template v-slot:activator="{ props }">
                    <v-list-item color="#886ab5" prepend-icon="mdi-account" title="Mon profil" value="myaccount"
                        v-bind="props"
                    ></v-list-item>
                </template>
                <template v-slot:default="{ isActive }">
                    <v-card>
                        <v-toolbar
                            title="Mon compte">
                            <v-btn icon="mdi-account"></v-btn>
                        </v-toolbar>
                
                <!-- user's data      -->
                <v-card-text>
                    <div class="profil">
                        <v-card
                            class="mx-auto"
                            max-width="434"
                            rounded="0"
                        >

                            <v-avatar
                                color="black"
                                size="150"
                                rounded="0"
                            >
                                <v-img cover src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                            </v-avatar>
                        <v-list-item
                            title="Marcus Obrien"
                            subtitle="Network Engineer"
                        ></v-list-item>

                        </v-card>
                    </div>


                    <v-btn prepend-icon="mdi-account-cog">Modifier mon profil</v-btn>
                    <v-btn prepend-icon="mdi-logout">Déconnexion</v-btn>
                </v-card-text>


                    <v-card-actions class="justify-end">
                        <v-btn
                        variant="text"
                        @click="isActive.value = false"
                        >Retour</v-btn>
                    </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>

            <!-- commandes -->
            <v-dialog
                transition="dialog-top-transition"
                width="auto"
            >
                <template v-slot:activator="{ props }">
                    <v-list-item color="#886ab5" prepend-icon="mdi-cart" title="Mes commandes" value="mycart"
                        v-bind="props"
                    ></v-list-item>
                </template>
                <template v-slot:default="{ isActive }">
                    <v-card>
                        <v-toolbar
                            title="Mes commandes">
                            <v-btn icon="mdi-cart"></v-btn>
                        </v-toolbar>
                
                <!-- user's data      -->
                <v-card-text>
                    <div style="margin-bottom: 20px">
                        <h2>#Liste des commandes</h2>
                        <CommandeList />
                    </div>

                    <v-btn prepend-icon="mdi-backspace">Annuler mes commandes</v-btn>
                </v-card-text>


                    <v-card-actions class="justify-end">
                        <v-btn
                        variant="text"
                        @click="isActive.value = false"
                        >Retour</v-btn>
                    </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>

            <v-list-item color="#886ab5" prepend-icon="mdi-artstation" title="Promotions" value="promotion"></v-list-item>
            <v-list-item color="#886ab5" prepend-icon="mdi-eye" title="Archives" value="archive"></v-list-item>
            
        </v-list>
    </v-navigation-drawer>
    
    <v-main style="height: 10px"></v-main>
</v-layout>
</template>

<script>
    import CommandeList from './Lists/commandeproduits.vue'
    export default
    {
        name: 'MyCard',
        components: 
        {
            CommandeList,
        }
    }
</script>

<style scoped>
    .profil
    {
        display: flex;
        justify-content: center;
        padding-bottom: 20px;
    }
</style>
