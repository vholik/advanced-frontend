import { ArticleDetailsComments } from './ArticleDetailsComments'

import type { Meta, StoryObj } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { avatarLink } from '@/shared/const/tests'

const meta = {
    title: 'shared/ArticleDetailsComments',
    component: ArticleDetailsComments,
    tags: ['autodocs'],
} satisfies Meta<typeof ArticleDetailsComments>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            articleDetailsPage: {
                comments: {
                    ids: ['1'],
                    entities: {
                        '1': {
                            id: '1',
                            text: 'hello this is comment',
                            user: {
                                avatar: avatarLink,
                                id: '1',
                                username: 'user1',
                            },
                        },
                    },
                },
            },
        }),
    ],
}
