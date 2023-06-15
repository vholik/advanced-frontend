import { ProfileCard } from './ProfileCard'

import type { Meta, StoryObj } from '@storybook/react'


import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'


const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs'],
} satisfies Meta<typeof ProfileCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        data: {
            username: 'admin',
            age: 17,
            city: 'Wrocław',
            country: Country.Germany,
            currency: Currency.USD,
            first: 'admin 2',
            lastname: 'admin name',
        },
    },
}

export const Readonly: Story = {
    args: {
        readonly: true,
    },
}
