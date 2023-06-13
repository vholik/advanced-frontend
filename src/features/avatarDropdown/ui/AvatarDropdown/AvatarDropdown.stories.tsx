import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { AvatarDropdown } from './AvatarDropdown'

const meta = {
    title: 'shared/AvatarDropdown',
    component: AvatarDropdown,
    tags: ['autodocs'],
} satisfies Meta<typeof AvatarDropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
}
