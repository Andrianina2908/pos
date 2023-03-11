<template>
    <DefaultLayout><ListeProduitsFav /></DefaultLayout>
</template>

<script>
    import DefaultLayout from '../components/layouts/DefaultLayout.vue';
    import ListeProduitsFav from '../components/Home/Lists/ListeProduitsFav.vue'
    export default
    {
        name: 'FavorisView',
        components: 
        {
            DefaultLayout,
            ListeProduitsFav
        }
    }
</script>

<style scoped>
    .lists
    {
        display: flex;
    }
    .fa
  {
    justify-content: space-between;
  }
</style>