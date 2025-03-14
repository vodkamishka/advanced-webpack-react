import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '@/shared/ui/Modal';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Modal',
    component: Modal,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        className: '',
        children: 'Piece words and group words\n' +
            'Piece words make it possible to talk about a single unit or units of something which is seen as uncountable.\n' +
            'Piece words include words such as piece, bit, item, article. We normally use them with of. We can use them in\n' +
            'the singular or the plural. …',
        isOpen: true,
    },
};


