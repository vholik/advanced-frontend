import { AvatarDropdown } from './AvatarDropdown'

import type { Meta, StoryObj } from '@storybook/react'



const meta = {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    tags: ['autodocs'],
} satisfies Meta<typeof AvatarDropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
}
