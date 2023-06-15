import { useEffect, type FC, type ReactNode } from 'react'

import { type Reducer } from '@reduxjs/toolkit'
import { useDispatch, useStore } from 'react-redux'

import {
    type StateSchema,
    type ReduxStoreWithManager,
    type StateSchemaKey,
} from '@/app/providers/StoreProvider'

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
    reducers: ReducersList
    removeAfterUnmount?: boolean
    children?: ReactNode
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
    children,
    reducers,
    removeAfterUnmount = true,
}) => {
    const store = useStore() as ReduxStoreWithManager
    const dispatch = useDispatch()

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer)
            dispatch({ type: `@INIT ${name} reducer` })
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]) => {
                    store.reducerManager.remove(name as StateSchemaKey)
                    dispatch({ type: `@DESTROY ${name} reducer` })
                })
            }
        }
        // eslint-disable-next-line
    }, [])
    return <>{children}</>
}
