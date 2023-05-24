import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

import LoginForm from './LoginForm'

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {
                username: 'username123',
                password: '1234',
            },
        }),
    ],
}

export const withError: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {
                username: 'username123',
                password: '1234',
                error: 'Error',
            },
        }),
    ],
}

export const loading: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {
                username: 'username123',
                password: '1234',
                isLoading: true,
            },
        }),
    ],
}
