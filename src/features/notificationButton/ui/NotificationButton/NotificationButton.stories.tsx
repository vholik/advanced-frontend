import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { NotificationButton } from './NotificationButton'

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
