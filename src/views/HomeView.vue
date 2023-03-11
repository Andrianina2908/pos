<template>
    <div class="home">
        <DefaultLayout><ListeProduits/><ListeProduits/><ListeProduits/></DefaultLayout>
    </div>
</template>

<script>
    import ListeProduits from '../components/Home/Lists/ListeProduits.vue'
    import DefaultLayout from '../components/layouts/DefaultLayout.vue'

    export default
    {
        name: 'HomeView',
        components: 
        {
            DefaultLayout,
            ListeProduits,
        }
    }
</script>

<style scoped>
    .lists
    {
        display: flex;
        justify-content: space-evenly;
    }
    .home
    {
        margin-bottom: 100px;
    }
</style>