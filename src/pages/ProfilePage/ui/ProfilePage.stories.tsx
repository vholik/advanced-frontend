import type { Meta, StoryObj } from '@storybook/react'

import ProfilePage from './ProfilePage'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { avatarLink } from '@/shared/const/tests'


const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
} satisfies Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const Ligth: Story = {
    args: {},
    decorators: [StoreDecorator({})],
}

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            profile: {
                data: {
                    username: 'admin',
                    age: 17,
                    city: 'Wrocław',
                    country: Country.Germany,
                    currency: Currency.USD,
                    first: 'admin 2',
                    lastname: 'admin name',
                    avatar: avatarLink,
                },
            },
        }),
    ],
}
