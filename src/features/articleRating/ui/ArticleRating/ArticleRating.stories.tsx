import ArticleRating from './ArticleRating'

import type { Meta, StoryObj } from '@storybook/react'


import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
    title: 'features/ArticleRating',
    component: ArticleRating,
    tags: ['autodocs'],
} satisfies Meta<typeof ArticleRating>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        articleId: '',
    },
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                },
            },
        }),
    ],
}
