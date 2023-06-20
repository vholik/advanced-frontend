import { NotificationItem } from './NotificationItem'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'entities/Notification/NotificationItem',
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
