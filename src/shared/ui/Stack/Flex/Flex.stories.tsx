import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'

import { Flex } from './Flex'

const meta = {
    title: 'shared/Flex',
    component: Flex,
    tags: ['autodocs'],
} satisfies Meta<typeof Flex>

export default meta
type Story = StoryObj<typeof meta>

export const Row: Story = {
    args: {
        direction: 'row',
        children: (
            <>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
            </>
        ),
    },
}

export const Column: Story = {
    args: {
        direction: 'column',
        children: (
            <>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
            </>
        ),
    },
}

export const ColumnGap4: Story = {
    args: {
        direction: 'column',
        gap: '4',
        children: (
            <>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
            </>
        ),
    },
}

export const ColumnGap32: Story = {
    args: {
        direction: 'column',
        gap: '4',
        children: (
            <>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
            </>
        ),
    },
}

export const RowGap8: Story = {
    args: {
        direction: 'row',
        gap: '8',
        children: (
            <>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
            </>
        ),
    },
}

export const RowGap16: Story = {
    args: {
        direction: 'row',
        gap: '16',
        children: (
            <>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
            </>
        ),
    },
}
