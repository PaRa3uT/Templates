import { createVuePlugin } from 'vite-plugin-vue2'
import Components from 'unplugin-vue-components/vite';
import { VuetifyResolver } from 'unplugin-vue-components/resolvers';
// import viteCompression from 'vite-plugin-compression';

export default {
  plugins: [
    createVuePlugin(/* options */),

    Components({
        resolvers: [
            VuetifyResolver()
        ]
    }),
    
    // viteCompression()
  ],
}