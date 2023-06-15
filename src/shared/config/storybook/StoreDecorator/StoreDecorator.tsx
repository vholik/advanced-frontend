import { type ReducersMapObject } from '@reduxjs/toolkit'
import { type Story } from '@storybook/react'

import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import '@/app/styles/index.scss'
import { articleDetailsReducer } from '@/entities/Article/testing'
import { profileReducer } from '@/features/editableProfileCard/testing'
import { loginReducer } from '@/features/AuthByUsername/testing'
import { restoreScrollReducer } from '@/features/RestoreScroll'
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage'
import { type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    restoreScroll: restoreScrollReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articleDetailsPage: articleDetailsPageReducer,
}

export const StoreDecorator =
    (initalState: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
    (Component: Story) => {
        return (
            <StoreProvider
                initialState={initalState}
                asyncReducers={{
                    ...defaultAsyncReducers,
                    ...asyncReducers,
                }}
            >
                <Component />
            </StoreProvider>
        )
    }
