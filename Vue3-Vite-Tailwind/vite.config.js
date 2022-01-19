import vue from '@vitejs/plugin-vue'

const path = require('path');

export default {
    plugins: [
        vue(),
    ],

    resolve: {
        alias: [{
            find: '@', replacement: path.resolve(__dirname, 'src')
        }]
    }

}