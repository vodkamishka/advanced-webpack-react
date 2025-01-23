import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions) {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: ((resourcePath: string) => Boolean(resourcePath.includes('.module.'))),
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:5]',
                        namedExport: false, // отключает экспорт каждого класса как отдельной именованной переменной
                    },
                },
            },
            // Compiles Sass to CSS
            'sass-loader',
        ],
    };

    return [
        svgLoader,
        fileLoader,
        typeScriptLoader,
        scssLoader,
    ];
}
