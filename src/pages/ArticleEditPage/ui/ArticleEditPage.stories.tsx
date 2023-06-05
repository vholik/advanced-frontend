import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import ArticleEditPage from './ArticleEditPage'

const meta = {
    title: 'shared/ArticleEditPage',
    component: ArticleEditPage,
    tags: ['autodocs'],
} satisfies Meta<typeof ArticleEditPage>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
}
