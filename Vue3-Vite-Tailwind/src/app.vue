<template>
    <h1 class="text-3xl font-bold underline text-cyan-600">Hello</h1>
    <p><router-link to="/main" class="underline hover:text-cyan-600">Go to Home</router-link></p>
    <p><router-link to="/page1" class="underline text-sky-600">Go to Page 1</router-link></p>
    <p><router-link to="/page2" class="underline">Go to Page 2</router-link></p>
    <p><a href="https://tailwindcss.com/docs/">TailwindCSS documentation</a></p>
    <router-view></router-view>
</template>

<script>
export default {
    setup() {
        console.log('Hello from setup');
    }
}
</script>