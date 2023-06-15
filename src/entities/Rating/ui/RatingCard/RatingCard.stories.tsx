import type { Meta, StoryObj } from '@storybook/react'

import { RatingCard } from './RatingCard'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

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
