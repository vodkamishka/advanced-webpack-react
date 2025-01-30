import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/ui/AppLink";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'AppLink',
    component: AppLink,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        className: '',
        children: 'Default',
        to: '/'
    },
};

export const PRIMARY: Story = {
    args: {
        className: '',
        children: 'Primary',
        theme: AppLinkTheme.PRIMARY,
        to: '/about'
    },
};

export const SECONDARY: Story = {
    args: {
        className: '',
        children: 'SECONDARY',
        theme: AppLinkTheme.SECONDARY,
        to: '/'
    },
};

export const RED: Story = {
    args: {
        className: '',
        children: 'RED',
        theme: AppLinkTheme.RED,
        to: '/about'
    },
};

