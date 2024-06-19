import {createRouter, createWebHistory } from "vue-router";

 import MovieList from './pages/MovieList.vue';
 import MovieComponent  from "./pages/MovieComponent.vue";
 import ScreeningComponent from "./pages/ScreeningComponent.vue";
 import AboutComponent from "./pages/AboutComponent.vue";
 import ContactComponent from "./pages/ContactComponent.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
      
        {
            path: '/',
            name: 'movieList',
            component: MovieList
        },
        {
            path: '/movies/:id',
            name: 'single-movie',
            component: MovieComponent
        },
        {
            path: '/screening',
            name: 'screening',
            component: ScreeningComponent
        },
        {
            path: "/about",
            name: "about-us",
            component: AboutComponent,
        },
        {
            path: "/contact",
            name: "contact",
            component: ContactComponent,
        },
    ]
})

export {router};