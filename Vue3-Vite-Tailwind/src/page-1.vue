<template>
    <div>
        <h1>Page 1</h1>
    </div>
</template>

<script>
    import { useStore } from '@/store';

    export default {
        setup() {
            const store = useStore()
            console.log(store.name);

        }
    }
</script>