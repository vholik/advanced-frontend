import { Loader } from './Loader'

import type { Meta, StoryObj } from '@storybook/react'


import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

const meta = {
    title: 'shared/Loader',
    component: Loader,
    tags: ['autodocs'],
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Ligth: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
}
