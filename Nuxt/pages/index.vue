<template>
    <main>
        <h1 class="red">Home page</h1>
            <NuxtLink to="/about">
                About (internal link that belongs to the Nuxt App)
            </NuxtLink>
            <NuxtLink to="/test_page">
                About (internal link that belongs to the Nuxt App)
            </NuxtLink>
            <a href="https://nuxtjs.org">External Link to another page</a>
    </main>
</template>

<script>
    export default {
        layout: 'test_layout',

        data() {
            return {
                title: 'Home page'
            }
        },

        head() {
            return{
                // title: 'Home page',
                title: this.title,
                meta: [{
                    hid: 'description',
                    name: 'description',
                    content: 'Home page description'
                }]
            }
        }
    }
</script>

<style>
    .red {
        color: red;
    }
</style>