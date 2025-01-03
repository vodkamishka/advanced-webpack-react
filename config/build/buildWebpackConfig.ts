import {BuildOptions} from "./types/config";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";

export function buildWebpackConfig(options: BuildOptions) {

    const {html, entry, output} = options.paths;

    return {
        mode: options.mode,
        entry,
        output: {
            filename: '[name][contenthash].js', // кеширование js файлов
            path: output,
            clean: true // очитска старых неиспользуемых файлов
        },
        module: {
            rules: buildLoaders()
        },
        resolve: buildResolvers(),
        plugins: buildPlugins(options),
    }
}