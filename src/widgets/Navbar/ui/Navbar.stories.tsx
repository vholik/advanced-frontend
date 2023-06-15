import type { Meta, StoryObj } from '@storybook/react'

import { Navbar } from './Navbar'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import { StoreProvider } from '@/app/providers/StoreProvider'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { avatarLink } from '@/shared/const/tests'

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    tags: ['autodocs'],
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Ligth: Story = {
    args: {},
    decorators: [StoreDecorator({})],
}

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
}

export const Authenticated: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    avatar: avatarLink,
                    id: '1',
                    username: 'helloworld',
                },
            },
        }),
    ],
}
