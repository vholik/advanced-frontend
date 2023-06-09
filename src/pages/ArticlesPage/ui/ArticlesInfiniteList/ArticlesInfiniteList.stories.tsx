import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

import { ArticlesInfiniteList } from './ArticlesInfiniteList'

const meta = {
    title: 'pages/ArticlesInfiniteList',
    component: ArticlesInfiniteList,
    tags: ['autodocs'],
} satisfies Meta<typeof ArticlesInfiniteList>

export default meta
type Story = StoryObj<typeof meta>

// export const Primary: Story = {
//     args: {},
//     decorators: [StoreDecorator({})],
// }
