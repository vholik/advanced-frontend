import type { Meta, StoryObj } from '@storybook/react'

import MainPage from './MainPage'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

const meta = {
    title: 'pages/MainPage',
    component: MainPage,
    tags: ['autodocs'],
} satisfies Meta<typeof MainPage>

export default meta
type Story = StoryObj<typeof meta>

export const Ligth: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
}
