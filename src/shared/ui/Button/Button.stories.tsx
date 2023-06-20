import { Button, ButtonSize, ThemeButton } from './Button'

import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'Button',
    },
}

export const PrimarySmall: Story = {
    args: {
        size: ButtonSize.SM,
        children: 'Button',
    },
}

export const Clear: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.CLEAR,
    },
}

export const Outline: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.OUTLINE,
    },
}

export const Stretch: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.STRETCH,
    },
}

export const OutlineDark: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}

export const Square: Story = {
    args: {
        children: '>',
        theme: ThemeButton.OUTLINE,
        square: true,
    },
}

export const SquareL: Story = {
    args: {
        children: '>',
        theme: ThemeButton.OUTLINE,
        size: ButtonSize.L,
        square: true,
    },
}

export const SquareXL: Story = {
    args: {
        children: '>',
        theme: ThemeButton.OUTLINE,
        size: ButtonSize.XL,
        square: true,
    },
}

export const Disabled: Story = {
    args: {
        children: 'Button',
        disabled: true,
    },
}
