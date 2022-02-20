import { createRouter, createWebHistory } from 'vue-router'

import page_main from './page-main.vue';
import page_1 from './page-1.vue';
import page_2 from './page-2.vue';
import page_3 from './page-3.vue';
import page_spa from './pages/spa.vue';
import page_dashboard from './pages/dashboard.vue';
import page_iot_settings from './pages/iot_settings.vue';
import page_landing from './pages/landing.vue';
import page_news from './pages/news.vue';
import page_resume from './pages/resume.vue';
import page_shop_product_list from './pages/shop_product_list.vue';
import page_shop_product_page from './pages/shop_product_page.vue';

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
    path: '/page3',
    component: page_3
}, {
    path: '/page_spa',
    component: page_spa
}, {
    path: '/page_dashboard',
    component: page_dashboard
}, {
    path: '/page_iot_module_settings',
    component: page_iot_settings
}, {
    path: '/page_landing',
    component: page_landing
}, {
    path: '/page_news_line',
    component: page_news
}, {
    path: '/page_resume',
    component: page_resume
}, {
    path: '/page_shop_product_list',
    component: page_shop_product_list
}, {
    path: '/page_shop_product_page',
    component: page_shop_product_page
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
