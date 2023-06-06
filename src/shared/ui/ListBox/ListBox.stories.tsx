import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { ListBox } from './ListBox'

const meta = {
    title: 'shared/ListBox',
    component: ListBox,
    tags: ['autodocs'],
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

export const DirectionTop: Story = {
    args: {
        value: 'Hello',
        theme: 'secondary_theme',
        items: [{ content: 'Hello', value: 'hello' }],
        direction: 'top',
    },
}
