import { Skeleton } from './Skeleton'

import type { Meta, StoryObj } from '@storybook/react'


import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

const meta = {
    title: 'shared/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        width: 100,
        height: 100,
        borderRadius: 4,
    },
}

export const Dark: Story = {
    args: {
        width: 100,
        height: 100,
        borderRadius: 4,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}
