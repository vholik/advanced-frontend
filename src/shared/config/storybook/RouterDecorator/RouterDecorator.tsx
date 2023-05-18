import { type Story, type StoryFn } from '@storybook/react'
import { type Theme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator = (Component: Story) => {
    return (
        <BrowserRouter>
            <Component />
        </BrowserRouter>
    )
}
