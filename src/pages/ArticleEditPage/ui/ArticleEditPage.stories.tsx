import type { Meta, StoryObj } from '@storybook/react'

import ArticleEditPage from './ArticleEditPage'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'


const meta = {
    title: 'pages/ArticleEditPage',
    component: ArticleEditPage,
    tags: ['autodocs'],
} satisfies Meta<typeof ArticleEditPage>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({})],
}
