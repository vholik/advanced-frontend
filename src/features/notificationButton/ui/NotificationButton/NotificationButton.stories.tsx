import type { Meta, StoryObj } from '@storybook/react'

import { NotificationButton } from './NotificationButton'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'


const meta = {
    title: 'shared/NotificationButton',
    component: NotificationButton,
    tags: ['autodocs'],
} satisfies Meta<typeof NotificationButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
}
