import { type ReducersMapObject} from '@reduxjs/toolkit'
import { type Story } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import 'app/styles/index.scss'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { profileReducer } from 'entities/Profile'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articleDetailsComments: articleDetailsReducer
}

export const StoreDecorator =
    (
        initalState: DeepPartial<StateSchema>,
        asyncReducers?: ReducersList
    ) =>
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
