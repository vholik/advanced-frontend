import { type ReducersMapObject, type DeepPartial } from '@reduxjs/toolkit'
import { type Story } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import 'app/styles/index.scss'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
}

export const StoreDecorator =
    (
        initalState: DeepPartial<StateSchema>,
        asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
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
