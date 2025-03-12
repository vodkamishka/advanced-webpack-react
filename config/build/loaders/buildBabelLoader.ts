export function buildBabelLoader(isDev : boolean, isTsx: boolean) {
    return {
        test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    isDev && require.resolve('react-refresh/babel'),
                    '@babel/plugin-transform-runtime',
                    [
                        '@babel/plugin-transform-typescript',
                        {
                            isTsx,
                        },
                    ],
                ].filter(Boolean),
            },
        },
    };
}