import { type FC, type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { type DeepPartial } from '@reduxjs/toolkit'

import { createReduxStore } from '../config/store'
import { type StateSchema } from '../config/StateSchema'

interface StoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<StateSchema>
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const { children, initialState } = props

    const store = createReduxStore(initialState as StateSchema)

    return <Provider store={store}>{children}</Provider>
}
