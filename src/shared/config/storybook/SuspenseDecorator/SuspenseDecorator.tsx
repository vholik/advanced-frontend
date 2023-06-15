import { Suspense } from 'react'

import { type Story } from '@storybook/react'

import '@/app/styles/index.scss'

export const SuspenseDecorator = (Component: Story) => {
    return (
        <Suspense>
            <Component />
        </Suspense>
    )
}
