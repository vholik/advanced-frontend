import { type Story, type StoryFn } from '@storybook/react'
import '@/app/styles/index.scss'
import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { type Theme } from '@/app/providers/ThemeProvider'

export const SuspenseDecorator = (Component: Story) => {
    return (
        <Suspense>
            <Component />
        </Suspense>
    )
}
