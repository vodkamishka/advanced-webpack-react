import type { Meta, StoryObj } from '@storybook/react';
import { SidebarItem } from './SidebarItem';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'SidebarItem',
    component: SidebarItem,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof SidebarItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main: Story = {
    args: {
        collapsed: false,
        item: {
            path: RoutePath.main,
            text: 'Главная',
            Icon: MainIcon
        }
    },
};

export const About: Story = {
    args: {
        collapsed: false,
        item: {
            path: RoutePath.about,
            text: 'О сайте',
            Icon: AboutIcon
        }
    },
};

export const MainCollapsed: Story = {
    args: {
        collapsed: true,
        item: {
            path: RoutePath.main,
            text: 'Главная',
            Icon: MainIcon
        }
    },
};

export const AboutCollapsed: Story = {
    args: {
        collapsed: true,
        item: {
            path: RoutePath.about,
            text: 'О сайте',
            Icon: AboutIcon
        }
    },
};

