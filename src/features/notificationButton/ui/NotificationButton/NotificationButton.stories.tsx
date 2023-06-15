import { NotificationButton } from './NotificationButton'

import type { Meta, StoryObj } from '@storybook/react'



const meta = {
    title: 'features/NotificationButton',
    component: NotificationButton,
    tags: ['autodocs'],
} satisfies Meta<typeof NotificationButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
}
