<template>
    <div>
        <div class="bg-gradient-to-r from-cyan-500 to-blue-500">&nbsp;</div>
        <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">&nbsp;</div>
        <h1>Page 1</h1>
        <p>{{ counter }}</p>
        <p>{{ name }}</p>
        <p>{{ doubleCount }}</p>
        <p>{{ getUserById(2) }}</p>

        <button @click="increment" class="px-2 py-1 font-bold text-sky-500 hover:text-sky-600 border-solid border-2 border-sky-500 hover:border-sky-600 rounded-md shadow-lg hover:shadow-none shadow-sky-500/50">Test button</button><br/>
        <br/>

        <button type="button" class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-6 py-3 rounded-md shadow-xl hover:shadow-none">
            Hover me
        </button>

        <!-- https://heroicons.com/ -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-cyan-500 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
    </div>
</template>

<script>
    import { storeToRefs } from 'pinia'
    import { useStore } from '@/store';

    export default {
        setup() {
            const store = useStore();

            console.log(store.name);

            const { counter, name, doubleCount, getUserById } = storeToRefs(store);

            const increment = () => {
                console.log('qwe');
                store.increment();
                console.log(store.counter)
            }

            console.log(store.name);

            return {
                counter,
                name,
                doubleCount,
                getUserById,
                increment
            }
        }
    }
</script>