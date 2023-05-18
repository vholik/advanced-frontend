import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

import { Button, ThemeButton } from './Button'

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'Text in button',
    },
}

export const Clear: Story = {
    args: {
        children: 'text in button',
        theme: ThemeButton.CLEAR,
    },
}

export const Outline: Story = {
    args: {
        children: 'text in button',
        theme: ThemeButton.OUTLINE,
    },
}

export const OutlineDark: Story = {
    args: {
        children: 'text in button',
        theme: ThemeButton.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}
