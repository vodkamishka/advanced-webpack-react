import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true, // проксирует запросы через гравную страницу -
        // при перезагрузке страницы
        // страница не пропадает,
        hot: true, // включает плагин hot module replacement -
        // для обновления страницы без перезагрузки
        client: {
            overlay: false, // отключает перкрытие ошибок для отображения компонента ErrorBoundary
        },
    };
}
