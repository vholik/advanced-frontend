import { RatingCard } from './RatingCard'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'entities/Rating/RatingCard',
    component: RatingCard,
    tags: ['autodocs'],
} satisfies Meta<typeof RatingCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
}
