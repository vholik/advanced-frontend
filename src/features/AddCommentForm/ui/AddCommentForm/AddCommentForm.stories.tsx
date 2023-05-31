import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

import AddCommentForm from './AddCommentForm'

const meta = {
    title: 'shared/AddCommentForm',
    component: AddCommentForm,
    tags: ['autodocs'],
} satisfies Meta<typeof AddCommentForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({})],
}
