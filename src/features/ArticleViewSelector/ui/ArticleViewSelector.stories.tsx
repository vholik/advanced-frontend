import { ArticleViewSelector } from './ArticleViewSelector'

import type { Meta, StoryObj } from '@storybook/react'

import { ArticleView } from '@/entities/Article'

const meta = {
    title: 'features/ArticleViewSelector',
    component: ArticleViewSelector,
    tags: ['autodocs'],
} satisfies Meta<typeof ArticleViewSelector>

export default meta
type Story = StoryObj<typeof meta>

export const List: Story = {
    args: {
        view: ArticleView.LIST,
    },
    decorators: [],
}
export const Grid: Story = {
    args: {
        view: ArticleView.GRID,
    },
    decorators: [],
}
