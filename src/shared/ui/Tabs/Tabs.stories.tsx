import type { Meta, StoryObj } from '@storybook/react'

import { Tabs } from './Tabs'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'


const meta = {
    title: 'shared/Tabs',
    component: Tabs,
    tags: ['autodocs'],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        items: [
            { content: 'Following', value: 'following' },
            { content: 'Trending', value: 'trending' },
        ],
    },
}

export const Selected: Story = {
    args: {
        items: [
            { content: 'Following', value: 'following' },
            { content: 'Trending', value: 'trending' },
        ],
        value: 'following',
    },
}
