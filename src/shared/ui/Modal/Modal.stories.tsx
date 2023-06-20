import { Modal } from './Modal'

import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

const meta = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusamus odio iure asperiores perferendis iste aperiam facilis
                earum ea repudiandae voluptatem ducimus eligendi non voluptas
                excepturi, vel sequi maxime accusantium officiis tempore nulla
                sed necessitatibus. Error in officiis aperiam corrupti dolore
                voluptate quidem earum, omnis rem? Consectetur, quaerat cumque?
                Natus, laborum.`,
        isOpen: true,
    },
}
export const Dark: Story = {
    args: {
        children: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusamus odio iure asperiores perferendis iste aperiam facilis
                earum ea repudiandae voluptatem ducimus eligendi non voluptas
                excepturi, vel sequi maxime accusantium officiis tempore nulla
                sed necessitatibus. Error in officiis aperiam corrupti dolore
                voluptate quidem earum, omnis rem? Consectetur, quaerat cumque?
                Natus, laborum.`,
        isOpen: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}
