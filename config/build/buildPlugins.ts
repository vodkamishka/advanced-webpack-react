import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins(options: BuildOptions) {
    return [
        new HtmlWebpackPlugin({
            template: options.paths.html // обязательно указание шаблона, иначе каждый раз
            // будет создаваться заново
        }),
        new webpack.ProgressPlugin(), // отображает в процентах процесс сборки,
        new MiniCssExtractPlugin({ // создает отдельные css файлы
            filename: 'css/[name][contenthash].css',
            chunkFilename: 'css/[name][contenthash:8].css'
        })
    ]
}