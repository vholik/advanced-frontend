import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter/model/slice/counterSlice'
import { userReducer } from 'entities/User'

import { type StateSchema } from './StateSchema'
import { createReducerManager } from './reducerManager'

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        ...asyncReducers,
    }

    const reducerManager = createReducerManager(rootReducer)

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })

    // @ts-expect-error: test
    store.reducerManager = reducerManager

    return store
}
