import { lazy } from 'react'

export const ProfilePageAsync = lazy(
    () =>
        new Promise((resolve) => {
            setTimeout(() => {
                // @ts-expect-error: test
                resolve(import('./ProfilePage'))
            }, 1500)
        })
)
