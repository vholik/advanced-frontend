import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { userActions, type User } from '@/entities/User'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'

interface LoginByUsernameProps {
    username: string
    password: string
}

export enum LoginErrors {
    INCORRECT_DATA = '',
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>('login/loginByUsername', async (authData, thunkAPI) => {
    const { dispatch, extra, rejectWithValue } = thunkAPI

    try {
        const response = await extra.api.post<User>('/login', authData)

        if (!response.data) {
            throw new Error()
        }

        localStorage.setItem(
            USER_LOCALSTORAGE_KEY,
            JSON.stringify(response.data)
        )
        dispatch(userActions.setAuthData(response.data))

        return response.data
    } catch (error) {
        return rejectWithValue('Error')
    }
})
