import { createRouter, createWebHistory } from 'vue-router'
import ItemPage from "@/views/ItemPage.vue";


export default createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'main',
            component: ItemPage,
        },
    ]
})
