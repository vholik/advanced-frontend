import type { Meta, StoryObj } from '@storybook/react'

import { CommentCard } from './CommentCard'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { avatarLink } from '@/shared/const/tests'


const meta = {
    title: 'shared/CommentCard',
    component: CommentCard,
    tags: ['autodocs'],
} satisfies Meta<typeof CommentCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        comment: {
            id: '1',
            text: 'Text',
            user: {
                id: '1',
                username: 'username',
                avatar: avatarLink,
            },
        },
    },
}

export const Loading: Story = {
    args: {
        comment: {
            id: '1',
            text: 'Text',
            user: {
                id: '1',
                username: 'username',
                avatar: avatarLink,
            },
        },
        isLoading: true,
    },
}
