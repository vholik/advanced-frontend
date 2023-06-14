import type { Meta, StoryObj } from '@storybook/react'

import { StarRating } from './StarRating'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
    title: 'shared/StarRating',
    component: StarRating,
    tags: ['autodocs'],
} satisfies Meta<typeof StarRating>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
}
