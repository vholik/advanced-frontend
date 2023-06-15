import { type Story, type StoryFn } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import '@/app/styles/index.scss'

export const RouterDecorator = (Component: Story) => {
    return (
        <BrowserRouter>
            <Component />
        </BrowserRouter>
    )
}
