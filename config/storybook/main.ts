import type { StorybookConfig } from '@storybook/react-webpack5';

import { storybookWebpackConfig } from './storybookWebpackConfig';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        '@storybook/addon-themes',
    ],

    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },

    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: 'automatic',
                },
            },
        },
    }),

    webpackFinal: storybookWebpackConfig,

    docs: {},
};
export default config;
