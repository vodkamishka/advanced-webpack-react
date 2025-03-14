import path from 'path';
import { getScssLoader } from '../build/loaders/getStyleLoader';
import { getSvgLoader } from '../build/loaders/getSvgLoader';
import { Configuration } from 'webpack';
export async function storybookWebpackConfig(config: Configuration) {

    config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../../src'),
    };
    
    config!.resolve!.modules = [
        path.resolve(__dirname, '../../src'),
        'node_modules'
    ];

    // Удаляем SVG из других лоадеров
    config?.module?.rules?.forEach(rule => {
        if (!rule || typeof rule !== 'object') return;
        if (rule.test instanceof RegExp && rule.test.test('.svg')) {
            rule.exclude = /\.svg$/;
        }
    });

    config!.module!.rules!.push(
        getSvgLoader(),
        getScssLoader(true),
    )
    return config;
}