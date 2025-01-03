import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";

export function buildPlugins(options: BuildOptions) {
    return [
        new HtmlWebpackPlugin({
            template: options.paths.html // обязательно указание шаблона, иначе каждый раз
            // будет создаваться заново
        }),
        new webpack.ProgressPlugin() // отображает в процентах процесс сборки
    ]
}