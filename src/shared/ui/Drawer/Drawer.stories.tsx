import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Drawer } from './Drawer'

const meta = {
    title: 'shared/Drawer',
    component: Drawer,
    tags: ['autodocs'],
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
}
