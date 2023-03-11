import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import store from '../src/store'

import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify(
    {
        components,
        directives,
    })

const app = createApp(App)

app.use(router)
app.use(store)

app.use(vuetify).mount('#app')
// createApp(App).mount('#app')
