<template>
  <div class="lists">
    <ProduitsList />
    <ProduitsList />
    <ProduitsList />
    <ProduitsList />
</div>

</template>

<script>
    import ProduitsList from './produits.vue'
    export default
    {
        name: 'ListeProduits',
        components: 
        {
            ProduitsList,
        }
    }
</script>