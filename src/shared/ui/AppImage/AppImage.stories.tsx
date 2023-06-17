import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { AppImage } from './AppImage'

const meta = {
    title: 'shared/AppImage',
    component: AppImage,
    tags: ['autodocs'],
} satisfies Meta<typeof AppImage>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
}
