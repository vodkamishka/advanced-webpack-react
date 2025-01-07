import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import path from "path";
import {EnvOptions} from "./config/build/types/config";

const config = (env: EnvOptions) => {

    const paths = {
        html: path.resolve(__dirname, 'public', 'index.html'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'dist'),
        src: path.resolve(__dirname, 'src'),
    }

    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const port = env.PORT || 3000;

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port
    })
};

export default config;