import { type DeepPartial } from '@reduxjs/toolkit'
import { type Story } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import 'app/styles/index.scss'

export const StoreDecorator =
    (initalState: DeepPartial<StateSchema>) => (Component: Story) => {
        return (
            <StoreProvider initialState={initalState}>
                <Component />
            </StoreProvider>
        )
    }
