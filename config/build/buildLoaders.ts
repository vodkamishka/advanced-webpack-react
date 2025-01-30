import { BuildOptions } from './types/config';
import { getScssLoader } from "./loaders/getStyleLoader";
import { getSvgLoader } from "./loaders/getSvgLoader";

export function buildLoaders({ isDev }: BuildOptions) {

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

    return [
        getSvgLoader(),
        fileLoader,
        typeScriptLoader,
        getScssLoader(isDev),
    ];
}
