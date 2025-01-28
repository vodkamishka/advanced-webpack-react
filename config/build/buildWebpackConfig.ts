import { BuildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions) {
    const { paths, isDev } = options;

    const { entry, output } = paths;

    return {
        mode: options.mode,
        entry,
        output: {
            filename: '[name][contenthash].js', // кеширование js файлов
            path: output,
            clean: true, // очитска старых неиспользуемых файлов
        },
        module: {
            rules: buildLoaders(options),
        },
        cache: false, // Отключаем кэширование
        resolve: buildResolvers(options),
        plugins: buildPlugins(options),
        ...(isDev ? { devtool: 'inline-source-map' } : {}),
        ...(isDev ? { devServer: buildDevServer(options) } : {}),

    };
}
