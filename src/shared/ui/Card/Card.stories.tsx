import { Card } from './Card'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'shared/Card',
    component: Card,
    tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'Card inner',
    },
}
