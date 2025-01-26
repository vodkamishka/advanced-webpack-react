import type { StorybookConfig } from "@storybook/react-webpack5";
import { storybookWebpackConfig } from './storybookWebpackConfig';

const config: {
    webpackFinal: (config) => Promise<never>;
    stories: string[];
    framework: { name: string; options: object };
    docs: object;
    addons: string[];
    typescript: {
        reactDocgen: string;
        reactDocgenTypescriptOptions: {
            compilerOptions: { allowSyntheticDefaultImports: boolean; esModuleInterop: boolean };
            propFilter: (prop) => boolean
        }
    };
    swc: (config, options) => { jsc: { transform: { react: { runtime: string } } } }
} = {
    stories: ["../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

    addons: [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
        "@storybook/addon-themes",
    ],

    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },

    swc: (config, options) => ({
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

    typescript: {
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            compilerOptions: {
                allowSyntheticDefaultImports: false,
                esModuleInterop: false,
            },
            // Filter out third-party props from node_modules except @mui packages.
            propFilter: (prop) =>
                prop.parent ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName) : true,
        },
    },

};
export default config;
