import type { Meta, StoryObj } from '@storybook/react'

import { ArticleTypeTabs } from './ArticleTypeTabs'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
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
