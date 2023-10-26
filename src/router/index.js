import { createRouter, createWebHistory } from 'vue-router'
import LandingComponent from '../components/LandingComponent.vue'
import HomeComponent from '../components/HomeComponent.vue'
import AboutMeComponent from '../components/AboutMeComponent.vue'
import {store} from  "../stores/songsData.js"




const routes = [
    { path: '/', component: LandingComponent, 
    

},
    { path: '/home', component: HomeComponent },
    { path: '/about', component: AboutMeComponent },
]


const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: routes
})

router.beforeEach((to,from)=>{
    if(to.fullPath == "/")
    {
        return true;
    }
    if (!store.user.login) {
        return "/"
    }
})

export default router