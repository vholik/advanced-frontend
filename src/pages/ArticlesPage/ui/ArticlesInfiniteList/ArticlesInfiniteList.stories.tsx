import { ArticlesInfiniteList } from './ArticlesInfiniteList'

import type { Meta, StoryObj } from '@storybook/react'

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
