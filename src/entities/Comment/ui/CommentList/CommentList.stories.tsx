import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { CommentList } from './CommentList'

const meta = {
    title: 'shared/CommentList',
    component: CommentList,
    tags: ['autodocs'],
} satisfies Meta<typeof CommentList>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        comments: [],
    },
}
