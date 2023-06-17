import { Drawer } from './Drawer'

import type { Meta, StoryObj } from '@storybook/react'

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
