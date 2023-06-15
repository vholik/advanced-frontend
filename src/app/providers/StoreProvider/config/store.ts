import {
    type ReducersMapObject,
    configureStore,
    type ThunkDispatch,
    type AnyAction,
    type Store,
    type Reducer,
    type CombinedState,
} from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch } from 'react-redux'
import { type NavigateFunction } from 'react-router-dom'

import { type ThunkExtraArg, type StateSchema } from './StateSchema'
import { createReducerManager } from './reducerManager'

import { counterReducer } from '@/entities/Counter'
import { userReducer } from '@/entities/User'
import { $api } from '@/shared/api/api'
import { restoreScrollReducer } from '@/features/RestoreScroll'
import { rtkApi } from '@/shared/api/rtkApi'

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: NavigateFunction
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        restoreScroll: restoreScrollReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    }

    const reducerManager = createReducerManager(rootReducer)

    const extraArg: ThunkExtraArg = {
        api: $api,
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
            }).concat(rtkApi.middleware),
    })

    // @ts-expect-error: test
    store.reducerManager = reducerManager

    return store
}

export type RootState = ReturnType<
    ReturnType<typeof createReduxStore>['getState']
>

export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>
