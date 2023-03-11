<template>
  <div class="lists">
    <ProduitsListFav />
    <ProduitsListFav />
  </div>
</template>

<script>
    import ProduitsListFav from './produitsFav.vue'
    export default
    {
        name: 'ListeProduitsFav',
        components: 
        {
          ProduitsListFav,
        }
    }
</script>