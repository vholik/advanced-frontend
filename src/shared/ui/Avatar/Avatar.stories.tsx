import { Avatar } from './Avatar'

import type { Meta, StoryObj } from '@storybook/react'

import { avatarLink } from '@/shared/const/tests'

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    tags: ['autodocs'],
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        alt: 'avatar',
        src: avatarLink,
    },
}

export const Small: Story = {
    args: {
        alt: 'avatar',
        src: avatarLink,
        size: 56,
    },
}
