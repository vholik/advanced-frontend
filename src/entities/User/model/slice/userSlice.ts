import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

import { type User, type UserSchema } from '../type/user'

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'
import { setFeatureFlags } from '@/shared/lib/features'
import { saveJsonSettings } from '../services/saveJsonSettings'
import { JsonSettings } from '../type/jsonSettings'
import { initAuthData } from '../services/initAuthData'

const initialState: UserSchema = {
    _inited: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload
            setFeatureFlags(action.payload.features)
            localStorage.setItem(
                USER_LOCALSTORAGE_KEY,
                JSON.stringify(action.payload.features),
            )
        },
        initAuthData: (state) => {},
        logout: (state) => {
            state.authData = undefined
            localStorage.removeItem(USER_LOCALSTORAGE_KEY)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            saveJsonSettings.fulfilled,
            (state, { payload }: PayloadAction<JsonSettings>) => {
                if (state.authData) {
                    state.authData.jsonSettings = payload
                }
            },
        )
        builder.addCase(
            initAuthData.fulfilled,
            (state, { payload }: PayloadAction<User>) => {
                const json = payload
                state.authData = json
                setFeatureFlags(json.features)
                state._inited = true
            },
        )

        builder.addCase(initAuthData.rejected, (state) => {
            state._inited = true
        })
    },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
