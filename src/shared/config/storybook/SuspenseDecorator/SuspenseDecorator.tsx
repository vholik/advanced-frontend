import { type Story, type StoryFn } from '@storybook/react'
import '@/app/styles/index.scss'
import { Suspense } from 'react'

export const SuspenseDecorator = (Component: Story) => {
    return (
        <Suspense>
            <Component />
        </Suspense>
    )
}
