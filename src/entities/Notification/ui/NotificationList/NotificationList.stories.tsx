import { NotificationList } from './NotificationList'

import type { Meta, StoryObj } from '@storybook/react'


import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    tags: ['autodocs'],
} satisfies Meta<typeof NotificationList>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({})],
}
