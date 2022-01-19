import { createVuePlugin } from 'vite-plugin-vue2'
import Components from 'unplugin-vue-components/vite';
import { VuetifyResolver } from 'unplugin-vue-components/resolvers'
import { viteSingleFile } from "vite-plugin-singlefile"

export default {
  plugins: [
    createVuePlugin(/* options */),

    Components({
        resolvers: [
            VuetifyResolver(),
        ]
    }),

    viteSingleFile()
  ],
  build: {
        cssCodeSplit: false,
        assetsInlineLimit: 100000000,
        rollupOptions: {
            output: {
                manualChunks: () => "everything.js",
            },
        },
    },
}