import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

export const buildOptimisation = () => ({
    // Включаем минификацию (сжатие) кода
    minimize: true,

    // Массив плагинов для минификации
    minimizer: [
        new TerserPlugin({
            // Параллельная обработка для ускорения процесса минификации
            parallel: true,

            // Настройки для минификации через Terser
            terserOptions: {
                compress: {
                    // Удаляем все консольные логи для уменьшения размера
                    drop_console: true,

                    // Удаляем операторы 'debugger', чтобы не оставить следы отладки в коде
                    drop_debugger: true,

                    // Количество проходов для сжатия (чем больше, тем тщательнее минификация)
                    passes: 3,
                },
                output: {
                    // Убираем все комментарии из финального кода
                    comments: false,
                },
            },
        }),
        // Плагин для минификации CSS
        new CssMinimizerPlugin({
            test: /\.css$/i,  // Применяем минификацию к файлам с расширением .css
            parallel: true,  // Включаем параллельную обработку для ускорения
            minimizerOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],  // Удаление всех комментариев
            },
        }),
    ],

    // Настройки для разделения кодовых чанков
    splitChunks: {
        // Применяем разделение для всех типов чанков (когда код может быть разделен на разные части)
        chunks: 'all',

        // Минимальный размер чанка, при котором будет применяться разделение
        minSize: 20000,

        // Максимальный размер чанка. Если чанк превышает этот размер, он будет разделен
        maxSize: 250000,
    },
});
