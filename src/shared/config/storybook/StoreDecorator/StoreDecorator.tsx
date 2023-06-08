import { type ReducersMapObject } from '@reduxjs/toolkit'
import { type Story } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import 'app/styles/index.scss'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { profileReducer } from 'features/editableProfileCard/model/slice/profileSlice'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { restoreScrollReducer } from 'features/RestoreScroll'
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage'
import ArticleDetailsPage from 'pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage'
import { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

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
