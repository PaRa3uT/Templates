import { createRouter, createWebHistory } from 'vue-router'

import page_main from './page-main.vue';
import page_1 from './page-1.vue';
import page_2 from './page-2.vue';


const routes = [{
    path: '/main', 
    component: page_main,
    meta: {
        title: 'Page Main',
        description: 'page main description'
    }
}, {
    path: '/page1', 
    component: page_1
}, {
    path: '/page2', 
    component: page_2
}, {
    path: '/:pathMatch(.*)*', redirect: '/main'
}];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Default title';
    document.querySelector('meta[name="description"]').setAttribute("content", to.meta.description || 'Default description');
    next();
});

export default router;