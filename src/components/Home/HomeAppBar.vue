<template>
    <v-layout class="appbar">
        <v-app-bar elevation="1" color="#886ab5">
            <v-btn icon="mdi-alpha-w-box-outline"></v-btn>
            <v-app-bar-title style="text-align:center">WINY</v-app-bar-title>
            <template v-slot:append>
                <v-btn icon="mdi-magnify"></v-btn>
                <v-btn icon="mdi-liquor"></v-btn>
            </template>
        </v-app-bar>
    </v-layout>
</template>

<script>
    export default
    {
        name: 'HomeAppBar',
    }
</script>

<style scoped>
    .appbar
    {
        margin-bottom: 70px;
    }
</style>
