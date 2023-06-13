import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

import { Sidebar } from './Sidebar'

const meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Ligth: Story = {
    args: {},
    decorators: [StoreDecorator({ user: {} })],
}

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ user: {} })],
}
