import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { avatarLink } from 'shared/const/tests'

import { CommentList } from './CommentList'

const meta = {
    title: 'shared/CommentList',
    component: CommentList,
    tags: ['autodocs'],
} satisfies Meta<typeof CommentList>

export default meta
type Story = StoryObj<typeof meta>

export const Loading: Story = {
    args: {
        comments: [
            { id: '1', text: 'text', user: { id: '1', username: 'user' } },
        ],
        isLoading: true,
    },
}

export const Primary: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'text',
                user: { id: '1', username: 'user', avatar: avatarLink },
            },
        ],
        isLoading: false,
    },
}
