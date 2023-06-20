import { ArticleTypeTabs } from './ArticleTypeTabs'

import type { Meta, StoryObj } from '@storybook/react'

import { ArticleType } from '@/entities/Article'

const meta = {
    title: 'shared/ArticleTypeTabs',
    component: ArticleTypeTabs,
    tags: ['autodocs'],
} satisfies Meta<typeof ArticleTypeTabs>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        value: ArticleType.ALL,
    },
}
