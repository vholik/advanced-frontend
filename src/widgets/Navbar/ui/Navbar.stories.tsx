import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreProvider } from 'app/providers/StoreProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

import { Navbar } from './Navbar'

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    tags: ['autodocs'],
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Ligth: Story = {
    args: {},
    decorators: [StoreDecorator({})],
}

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
}
