import type { Meta, StoryObj } from '@storybook/react'

import { Note } from './Note'

const meta = {
    title: 'shared/Note',
    component: Note,
    tags: ['autodocs'],
} satisfies Meta<typeof Note>

export default meta
type Story = StoryObj<typeof meta>

export const Error: Story = {
    args: {
        children: 'Error message',
    },
}
