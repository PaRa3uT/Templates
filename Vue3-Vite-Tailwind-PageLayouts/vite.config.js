import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path');

export default defineConfig({
    plugins: [
        vue(),
    ],

    resolve: {
        alias: [{
            find: '@', replacement: path.resolve(__dirname, 'src')
        }]
    },
    
    test: {
        // environment: 'jsdom'  // vitest
        runtimeEnv: 'dom',  // peeky
    }

})