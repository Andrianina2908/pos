<template>
    <div class="v-container">
        <DefaultLayout><ListePointsVente /></DefaultLayout>
    </div>
</template>

<script>
    import DefaultLayout from '../components/layouts/DefaultLayout.vue';
    import ListePointsVente from '../components/Home/Lists/ListePointsVente.vue'
    export default
    {
        name: 'PointsVente',
        components: {
            DefaultLayout,
            ListePointsVente,
        }
    }
</script>