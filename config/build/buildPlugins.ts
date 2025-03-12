import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import CircularDependencyPlugin from 'circular-dependency-plugin';

export function buildPlugins(options: BuildOptions) {
    const { isDev,  apiUrl, paths } = options;

    let plugins = [
        new HtmlWebpackPlugin({ // для обработки html
            template: options.paths.html, // обязательно указание шаблона, иначе каждый раз
            // будет создаваться заново
        }),
        new webpack.ProgressPlugin(), // отображает в процентах процесс сборки,
        new Dotenv({
            path: paths.env,
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
        }),
        new CircularDependencyPlugin({
            // exclude detection of files based on a RegExp
            exclude: /a\.js|node_modules/,
            // add errors to webpack instead of warnings
            failOnError: true,
        })
        // new BundleAnalyzerPlugin({
        //     openAnalyzer: false
        // }), // плагин для анализа размеров бандла
    ];

    if (isDev) {
        plugins = [
            ...plugins,
            new webpack.HotModuleReplacementPlugin(), // для обновления страницы без перезагрузки
            new ReactRefreshWebpackPlugin(), // для обновления реакта без перзагрузки страницы
        ];
    }

    if (!isDev) {
        plugins = [
            ...plugins,
            new MiniCssExtractPlugin({ // создает отдельные css файлы
                filename: 'css/[name][contenthash].css',
                chunkFilename: 'css/[name][contenthash:8].css',
            }),
        ];
    }

    return plugins;
}
