import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { NotificationItem } from './NotificationItem'

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
