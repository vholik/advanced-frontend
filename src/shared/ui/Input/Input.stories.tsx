import { Input } from './Input'

import type { Meta, StoryObj } from '@storybook/react'


const meta = {
    title: 'shared/Input',
    component: Input,
    tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        placeholder: 'Input',
        value: '123421',
    },
}
