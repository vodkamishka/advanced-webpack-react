const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: '[name][contenthash].js', // кеширование js файлов
        path: path.resolve(__dirname, 'build'),
        clean: true // очитска старых неиспользуемых файлов
    },
    plugins: [
       new HtmlWebpackPlugin({
           template: path.resolve(__dirname, 'public', 'index.html')
       }),
       new webpack.ProgressPlugin() // отображает в процентах процесс сборки
    ],
    
}