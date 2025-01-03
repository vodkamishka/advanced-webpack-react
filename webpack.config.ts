import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import path from "path";

const paths = {
    html: path.resolve(__dirname, 'public', 'index.html'),
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: path.resolve(__dirname, 'dist')
}

const mode = 'development';
const isDev = mode === 'development';

const config= buildWebpackConfig({
    mode: 'development',
    paths,
    isDev
});

export default config;