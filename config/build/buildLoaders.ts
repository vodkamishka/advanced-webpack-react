export function buildLoaders() {

    const typeScriptLoader = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }

    return [
        typeScriptLoader
    ]
}