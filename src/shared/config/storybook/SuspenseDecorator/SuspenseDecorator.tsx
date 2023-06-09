import { type Story, type StoryFn } from '@storybook/react'
import { type Theme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'
import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

export const SuspenseDecorator = (Component: Story) => {
    return (
        <Suspense>
            <Component />
        </Suspense>
    )
}
