import type { Preview } from "@storybook/react";
import { withThemeByClassName } from '@storybook/addon-themes';

import '../../src/app/styles/index.scss'
import './preview.scss';
import { BrowserRouter } from "react-router-dom";

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
        (Story) => (
            <BrowserRouter>
                {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
                <Story />
            </BrowserRouter>
        ),
    ],

};

export default preview;
