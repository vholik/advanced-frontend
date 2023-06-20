import { ListBox } from './ListBox'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'shared/ListBox',
    component: ListBox,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ padding: '100px' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof ListBox>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        value: 'Hello',
        items: [{ content: 'Hello', value: 'hello' }],
    },
}

export const Secondary: Story = {
    args: {
        value: 'Hello',
        theme: 'secondary_theme',
        items: [{ content: 'Hello', value: 'hello' }],
    },
}

export const DirectionBottomLeft: Story = {
    args: {
        value: 'Hello',
        theme: 'secondary_theme',
        items: [{ content: 'Hello', value: 'hello' }],
        direction: 'bottom left',
    },
}
export const DirectionBottomRight: Story = {
    args: {
        value: 'Hello',
        theme: 'secondary_theme',
        items: [{ content: 'Hello', value: 'hello' }],
        direction: 'bottom right',
    },
}

export const DirectionTopLeft: Story = {
    args: {
        value: 'Hello',
        theme: 'secondary_theme',
        items: [{ content: 'Hello', value: 'hello' }],
        direction: 'top left',
    },
}

export const DirectionTopRight: Story = {
    args: {
        value: 'Hello',
        theme: 'secondary_theme',
        items: [{ content: 'Hello', value: 'hello' }],
        direction: 'top right',
    },
}
