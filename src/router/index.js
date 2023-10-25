import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'
import AboutMeComponent from '../components/AboutMeComponent.vue'





const routes = [
    { path: '/home', component: HomeComponent },
    { path: '/about', component: AboutMeComponent },
]


const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: routes
})

export default router