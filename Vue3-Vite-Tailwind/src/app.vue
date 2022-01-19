<template>
    <h1 class="text-3xl font-bold underline text-cyan-600">Hello</h1>
    <router-link to="/main" class="underline">Go to Home</router-link>
    <router-link to="/page1" class="underline">Go to Page 1</router-link>
    <router-link to="/page2" class="underline">Go to Page 2</router-link>
    <router-view></router-view>
</template>

<script>
export default {
    setup() {
        console.log('Hello from setup');
    }
}
</script>