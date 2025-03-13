import { BuildOptions } from './types/config';
import { getScssLoader } from './loaders/getStyleLoader';
import { getSvgLoader } from './loaders/getSvgLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders({ isDev }: BuildOptions) {

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    // const typeScriptLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // };

    const codeBabelLoader = buildBabelLoader(isDev, false );
    const tsxCodeBabelLoader = buildBabelLoader(isDev, true );
    const svgLoader = getSvgLoader();
    const cssLoader = getScssLoader(isDev);

    return [
        svgLoader,
        fileLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        //typeScriptLoader,
        cssLoader
    ];
}
