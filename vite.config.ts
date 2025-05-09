import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [
        react(),
        svgr({
            include: '**/*.svg',
            svgrOptions: {
                exportType: 'default',
            },
        }),
    ],
    server: {
        open: true,
        port: 3000,
    },
    resolve: {
        alias: {
            '@': '/src', // Алиас для использования @ вместо /src
        },
    },
    define: {
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://localhost:8000'),
        __PROJECT__: JSON.stringify('frontend'),
    },
});
