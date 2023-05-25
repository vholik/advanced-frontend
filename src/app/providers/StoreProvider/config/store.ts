import {
    type ReducersMapObject,
    configureStore,
    type ThunkDispatch,
    type AnyAction,
    type Store,
    type Reducer,
    type CombinedState,
} from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter/model/slice/counterSlice'
import { userReducer } from 'entities/User'
import { TypedUseSelectorHook, useDispatch } from 'react-redux'
import { $api } from 'shared/api/api'
import { type NavigateFunction } from 'react-router-dom'

import { type ThunkExtraArg, type StateSchema } from './StateSchema'
import { createReducerManager } from './reducerManager'

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: NavigateFunction
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        ...asyncReducers,
    }

    const reducerManager = createReducerManager(rootReducer)

    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate,
    }

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
                serializableCheck: false,
            }),
    })

    // @ts-expect-error: test
    store.reducerManager = reducerManager

    return store
}

export type RootState = ReturnType<typeof createReduxStore>

export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>
