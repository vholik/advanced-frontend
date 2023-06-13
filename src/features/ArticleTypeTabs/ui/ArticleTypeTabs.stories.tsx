import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ArticleType } from '@/entities/Article'

import { ArticleTypeTabs } from './ArticleTypeTabs'

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
