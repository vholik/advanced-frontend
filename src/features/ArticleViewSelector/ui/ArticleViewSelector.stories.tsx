import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { ArticleViewSelector } from './ArticleViewSelector'

const meta = {
    title: 'shared/ArticleViewSelector',
    component: ArticleViewSelector,
    tags: ['autodocs'],
} satisfies Meta<typeof ArticleViewSelector>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
}
