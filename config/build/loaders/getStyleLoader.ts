import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const getScssLoader = (isDev: boolean) => {
    return {
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
                        namedExport: false, // отключает экспорт каждого класса как отдельной именованной переменной,
                        exportLocalsConvention: 'asIs' // оставляет оригинальные имена классов
                    },
                },
            },
            // Compiles Sass to CSS
            'sass-loader',
        ],
    };

}