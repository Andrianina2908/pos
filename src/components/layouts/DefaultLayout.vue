<template>
    <MyCard />
    <HomeAppBar />
    <HomeBottomBar />
    <div>
        <slot/>
    </div>
</template>

<script>
    import MyCard from '../Home/MyCard.vue'
    import HomeAppBar from '../Home/HomeAppBar.vue'
    import HomeBottomBar from '../Home/HomeBottomBar.vue'

    export default
    {
        name: 'DefaultLayout',
        components: 
        {
            MyCard,
            HomeAppBar,
            HomeBottomBar
        }
    }
</script>