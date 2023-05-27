import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            comps: fileURLToPath(new URL('./src/components', import.meta.url)),
            routes: fileURLToPath(new URL('./src/router', import.meta.url)),
            views: fileURLToPath(new URL('./src/views', import.meta.url))
        }
    }
})
