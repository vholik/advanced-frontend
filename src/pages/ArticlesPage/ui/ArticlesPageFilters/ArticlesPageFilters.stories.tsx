import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

import { ArticlesPageFilters } from './ArticlesPageFilters'

const meta = {
    title: 'pages/ArticlesPageFilters',
    component: ArticlesPageFilters,
    tags: ['autodocs'],
} satisfies Meta<typeof ArticlesPageFilters>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({})],
}
