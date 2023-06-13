import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

import ForbiddenPage from './ForbiddenPage'

const meta = {
    title: 'pages/ForbiddenPage',
    component: ForbiddenPage,
    tags: ['autodocs'],
} satisfies Meta<typeof ForbiddenPage>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({})],
}
