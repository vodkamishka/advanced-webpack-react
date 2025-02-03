module.exports = {
    'configurations': {
        'chrome.laptop': {
            'target': 'chrome.app',
            'width': 1366,
            'height': 768,
            'deviceScaleFactor': 1,
            'mobile': false
        },
        'chrome.iphone7': {
            'target': 'chrome.app',
            'preset': 'iPhone 7'
        }
    },
    storybook: {
        port: 6006,       // Порт Storybook
        host: '127.0.0.1', // Хост Storybook
        configDir: './config/storybook', // Путь к конфигурации Storybook
    },
};