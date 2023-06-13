import type { Meta, StoryObj } from '@storybook/react'

import { Popover } from './Popover'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'


const meta = {
    title: 'shared/Popover',
    component: Popover,
    tags: ['autodocs'],
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
}
