import type { Meta, StoryObj } from '@storybook/react'

import { NotificationItem } from './NotificationItem'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'


const meta = {
    title: 'shared/NotificationItem',
    component: NotificationItem,
    tags: ['autodocs'],
} satisfies Meta<typeof NotificationItem>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        item: {
            description: 'Hello world',
            id: '1',
            title: 'Hello world',
        },
    },
}
