import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { [FTName] } from './[FTName]';


const meta = {
    title: 'shared/[FTName]',
    component: [FTName],
    tags: ['autodocs'],
} satisfies Meta<typeof [FTName]>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
    },
}