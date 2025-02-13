import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins(options: BuildOptions) {
    const { isDev,  apiUrl } = options;

    let plugins = [
        new HtmlWebpackPlugin({
            template: options.paths.html, // обязательно указание шаблона, иначе каждый раз
            // будет создаваться заново
        }),
        new webpack.ProgressPlugin(), // отображает в процентах процесс сборки,
        // new BundleAnalyzerPlugin({
        //     openAnalyzer: false
        // }), // плагин для анализа размеров бандла
    ];

    if (isDev) {
        plugins = [
            ...plugins,
            new webpack.DefinePlugin({
                __IS_DEV__: JSON.stringify(isDev),
                __API__: JSON.stringify(apiUrl),
            }),
            new webpack.HotModuleReplacementPlugin(), // для обновления страницы без перезагрузки
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
