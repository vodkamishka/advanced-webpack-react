import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '@/shared/ui/Text';
import { TextTheme } from '@/shared/ui/Text/ui/Text';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Text',
    component: Text,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        title: 'Primary',
        text: 'Primary',
        theme: TextTheme.PRIMARY,
    },
};
export const Error: Story = {
    args: {
        title: 'Error',
        text: 'Error',
        theme: TextTheme.ERROR,
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'Only title',
    },
};
export const OnlyText: Story = {
    args: {
        text: 'Only text',
    },
};
