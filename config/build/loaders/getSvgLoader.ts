export const getSvgLoader = () => {
    return {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };
}