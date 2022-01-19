<template>
    <div>
        <h3>Component C</h3>
        <v-btn outlined color="success" v-on:click="test_axios">Test</v-btn>
        <p>
            <router-link to="/foo"> Go to Foo</router-link>
            <router-link to="/bar"> Go to Bar</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        methods: {
            async test_axios() {
                console.log(this.$store);
                console.log(this.$store.state.test_variable);

                try {
                    const response = await this.$app_axios.get('http://127.0.0.1:8081/test');
                    console.log('mark 1');
                    console.log(response.data);

                } catch (error) {
                    console.log(error);

                }

                this.$app_axios.get('http://127.0.0.1:8081/test').then(response => {
                    console.log('mark 2');
                    console.log(response.data);
                })

            }
        },

        data() {
            return {
            }
        }
    }
</script>