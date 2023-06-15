import { StarRating } from './StarRating'

import type { Meta, StoryObj } from '@storybook/react'



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
