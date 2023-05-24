import { type FC, lazy } from 'react'

import { type LoginFormProps } from './LoginForm'

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
    () =>
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(import('./LoginForm'))
            }, 3000)
        })
)
