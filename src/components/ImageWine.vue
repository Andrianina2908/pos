<template>
    <div style="margin-bottom: 20px">
        <v-carousel hide-delimiters>
            <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                cover
            ></v-carousel-item>
        </v-carousel>
    </div>
  </template>
  
  <script>
    export default {
      name: 'ImageWine',
      data(){
        return {
          items: [
            {
              src: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            },
            {
              src: 'https://images.unsplash.com/photo-1551980362-5f5816fdf020?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80 ',
            },
            {
              src: 'https://images.unsplash.com/photo-1456427651609-f494c36fbc45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80 ',
            },
          ],
        }
      },
    }
  </script>