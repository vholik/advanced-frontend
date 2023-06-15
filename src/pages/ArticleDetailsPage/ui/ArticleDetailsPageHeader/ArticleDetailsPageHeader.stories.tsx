import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader'

import type { Meta, StoryObj } from '@storybook/react'


import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'


const meta = {
    title: 'shared/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    tags: ['autodocs'],
} satisfies Meta<typeof ArticleDetailsPageHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                    username: 'hello',
                },
            },
            articleDetails: {
                data: {
                    user: {
                        id: '1',
                    },
                },
            },
        }),
    ],
}
