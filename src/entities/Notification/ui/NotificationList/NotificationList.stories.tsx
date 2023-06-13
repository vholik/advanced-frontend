import type { Meta, StoryObj } from '@storybook/react'

import { NotificationList } from './NotificationList'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'


const meta = {
    title: 'shared/NotificationList',
    component: NotificationList,
    tags: ['autodocs'],
} satisfies Meta<typeof NotificationList>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
}
