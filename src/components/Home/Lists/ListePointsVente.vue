<template>
    <ImageWine />
    <!-- <h2>Liste des points de vente <v-icon size="20" icon="mdi-shopping-outline"></v-icon></h2> -->
    <template class="lpv">
        <v-btn prepend-icon="mdi-shopping-outline">Les points de ventes disponible</v-btn>
    </template>

    <div class="ptsList" style="display: flex; justify-content: space-evenly">
        <PointsVente /><PointsVente /><PointsVente />
    </div>

    <div class="ptsList" style="display: flex; justify-content: space-evenly">
        <PointsVente /><PointsVente /><PointsVente />
    </div>

    <div class="ptsList" style="display: flex; justify-content: space-evenly">
        <PointsVente /><PointsVente /><PointsVente />
    </div>
</template>

<script>
    import ImageWine from '../../ImageWine.vue'
    import PointsVente from '../Lists/PointsVente.vue'
    export default
    {
        name: 'ListePointsVente',
        components: 
        {
            ImageWine,
            PointsVente,
        }
    }
</script>

<style scoped>
    .lpv
    {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }
    .ptsList
    {
        margin-bottom: 40px;
    }
</style>