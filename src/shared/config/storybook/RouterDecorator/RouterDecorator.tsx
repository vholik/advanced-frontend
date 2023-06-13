import { type Story, type StoryFn } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import { type Theme } from '@/app/providers/ThemeProvider'

import '@/app/styles/index.scss'

export const RouterDecorator = (Component: Story) => {
    return (
        <BrowserRouter>
            <Component />
        </BrowserRouter>
    )
}
