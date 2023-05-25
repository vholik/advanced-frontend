import { type ReducersMapObject} from '@reduxjs/toolkit'
import { type Story } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import 'app/styles/index.scss'
import { profileReducer } from 'entities/Profile'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer
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
