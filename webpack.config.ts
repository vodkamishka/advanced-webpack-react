import path from 'path';
import HtmlWebpackPlugin from'html-webpack-plugin';
import webpack from 'webpack';

const config = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        filename: '[name][contenthash].js', // кеширование js файлов
        path: path.resolve(__dirname, 'build'),
        clean: true // очитска старых неиспользуемых файлов
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'], // настройка позволяет импортировать файлы без расширения
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html') // обязательно указание шаблона, иначе каждый раз
            // будет создаваться заново
        }),
        new webpack.ProgressPlugin() // отображает в процентах процесс сборки
    ],

}

export default config;