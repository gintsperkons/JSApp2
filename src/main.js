import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import HomeComponent from  './components/HomeComponent.vue'
import NavComponent from './components/NavComponent.vue'
import LandingComponent from './components/LandingComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import SongListComponent from './components/SongListComponent.vue'
import SongFilterComponent from './components/SongFilterComponent.vue'
import AboutMeComponent from './components/AboutMeComponent.vue'
import FormComponent from './components/FormComponent.vue'

const app = createApp(App)

app.component("HomeComponent", HomeComponent)
app.component("NavComponent", NavComponent)
app.component("LandingComponent", LandingComponent)
app.component("HeaderComponent",HeaderComponent)
app.component("SongListComponent", SongListComponent)
app.component("SongFilterComponent", SongFilterComponent)
app.component("AboutMeComponent", AboutMeComponent)
app.component("FormComponent", FormComponent)

app.use(createPinia())
app.use(router)

app.mount('#app')