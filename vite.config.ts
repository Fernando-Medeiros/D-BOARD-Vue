import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            comps: fileURLToPath(new URL('./src/components', import.meta.url)),
            composable: fileURLToPath(new URL('./src/composable', import.meta.url)),
            libs: fileURLToPath(new URL('./src/core/libs', import.meta.url)),
            routes: fileURLToPath(new URL('./src/router', import.meta.url)),
            services: fileURLToPath(new URL('./src/core/services', import.meta.url)),
            utils: fileURLToPath(new URL('./src/core/utils', import.meta.url)),
            views: fileURLToPath(new URL('./src/views', import.meta.url))
        }
    }
})
