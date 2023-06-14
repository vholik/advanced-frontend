import type { Meta, StoryObj } from '@storybook/react'

import { ArticleRating } from './ArticleRating'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
    title: 'shared/ArticleRating',
    component: ArticleRating,
    tags: ['autodocs'],
} satisfies Meta<typeof ArticleRating>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
}
