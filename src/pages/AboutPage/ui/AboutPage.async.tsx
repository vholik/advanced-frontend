import { lazy } from 'react'

export const AboutPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            setTimeout(() => {
                // @ts-expect-error: test
                resolve(import('./AboutPage'))
            }, 500)
        })
)
