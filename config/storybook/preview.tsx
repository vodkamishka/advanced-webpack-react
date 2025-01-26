import type { Preview } from "@storybook/react";
import { withThemeByClassName } from '@storybook/addon-themes';

import '../../src/app/styles/index.scss'
import './preview.scss';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },

    tags: ["autodocs"],

    decorators: [
        withThemeByClassName({
            themes: {
                light: 'light',
                dark: 'dark',
            },
            defaultTheme: 'light',
        }),
    ],

};

export default preview;
