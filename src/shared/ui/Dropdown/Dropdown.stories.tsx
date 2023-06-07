/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../Button/Button'

import { Dropdown } from './Dropdown'

const meta = {
    title: 'shared/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        trigger: <Button>Hello people</Button>,
        items: [{ content: 'Item', href: '/fdf', onClick: () => 0 }],
    },
}

export const DirectionBottomLeft: Story = {
    args: {
        items: [{ content: 'Hello', onClick: () => 1 }],
        direction: 'bottom left',
        trigger: <Button>hello</Button>,
    },
}
export const DirectionBottomRight: Story = {
    args: {
        items: [{ content: 'Hello', onClick: () => 1 }],
        trigger: <Button>hello</Button>,
        direction: 'bottom right',
    },
}

export const DirectionTopLeft: Story = {
    args: {
        items: [{ content: 'Hello', onClick: () => 1 }],
        trigger: <Button>hello</Button>,
        direction: 'top left',
    },
}

export const DirectionTopRight: Story = {
    args: {
        items: [{ content: 'Hello', onClick: () => 1 }],
        trigger: <Button>hello</Button>,
        direction: 'top right',
    },
}
