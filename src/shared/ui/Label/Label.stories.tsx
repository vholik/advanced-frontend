import { Label } from './Label'

import type { Meta, StoryObj } from '@storybook/react'


const meta = {
    title: 'shared/Label',
    component: Label,
    tags: ['autodocs'],
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        value: 'Label',
    },
}
