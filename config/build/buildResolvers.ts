import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions) {
    return {
        extensions: ['.tsx', '.ts', '.js'], // настройка позволяет импортировать файлы без описания расширения,
        preferAbsolute: true, // предпочтение абсолютным путям,
        alias: {},
        modules: [options.paths.src, 'node_modules'], // Настройка modules в Webpack указывает Webpack, где он должен
        // искать модули при импорте в вашем проекте.
    };
}
