import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Page } from './Page'

const meta = {
    title: 'shared/Page',
    component: Page,
    tags: ['autodocs'],
} satisfies Meta<typeof Page>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
}
