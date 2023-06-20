import { Text, TextSize, TextTheme } from './Text'

import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

const meta = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'Title lorem ipsum',
    },
}

export const SizeM: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'Title lorem ipsum',
    },
}
export const SizeS: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'Title lorem ipsum',
        size: TextSize.M,
    },
}
export const SizeL: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'Title lorem ipsum',
        size: TextSize.L,
    },
}

export const onlyTitle: Story = {
    args: {
        title: 'Title lorem ipsum',
    },
}

export const onlyText: Story = {
    args: {
        text: 'Title lorem ipsum',
    },
}

export const PrimaryDark: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'Title lorem ipsum',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}

export const onlyTitleDark: Story = {
    args: {
        title: 'Title lorem ipsum',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}

export const onlyTextDark: Story = {
    args: {
        text: 'Title lorem ipsum',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}

export const Error: Story = {
    args: {
        text: 'Title lorem ipsum',
        theme: TextTheme.ERROR,
    },
}
