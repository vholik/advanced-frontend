import { CurrencySelect } from './CurrencySelect'

import type { Meta, StoryObj } from '@storybook/react'


const meta = {
    title: 'shared/CurrencySelect',
    component: CurrencySelect,
    tags: ['autodocs'],
} satisfies Meta<typeof CurrencySelect>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
}
