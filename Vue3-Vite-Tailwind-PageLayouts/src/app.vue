<template>

    <template  v-for="link in links">
        <span v-if="link.title" >
            <router-link :to="link.to" class="underline hover:text-cyan-600">{{ link.title }}</router-link>
            |
        </span>
    </template>

    <router-view></router-view>

</template>

<script>
export default {
    setup() {
        console.log('Hello from setup');

        const links = [{
            'to': '/main',
            'title': 'Go to Home'
        }, {
            'to': '/page1',
            'title': 'Go to Page 1'
        }, {
            'to': '/page2',
            'title': 'Go to Page 2'
        }, {
            'to': '/page3',
            'title': 'Go to Page 3'
        }, {
            'to': '/page_spa',
            'title': 'SPA'
        }, {
            'to': '/page_landing',
            'title': 'Landing' // Прайс на мои услуги (Компьютерный мастер / системный администратор)
        }, {
            'to': '/page_dashboard',
            'title': 'Dashboard'
        }, {
            'to': '/page_resume',
            'title': 'Resume'  // Моё резюме
        }, {
            'to': '/page_news_line',
            'title': 'Лента новостей' // (Лента постов)
        }, {
            'to': '/page_iot_module_settings',
            'title': 'IoT Настройки устройства'
        }, {
            'to': '/page_store',
            'title': 'Магазин'
        }, {
            'to': '/page_store_products',
            'title': 'Товары'
        }, {
            'to': '/',
            'title': ''
        }, {
            'to': '/',
            'title': ''
        }];

        return {
            links
        };
    }
}
</script>
