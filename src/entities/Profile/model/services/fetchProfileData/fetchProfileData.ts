import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import axios from 'axios'
import { userActions, type User } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

import { type Profile } from '../../types/profile'

interface LoginByUsernameProps {
    username: string
    password: string
}

export enum LoginErrors {
    INCORRECT_DATA = '',
}

export const fetchProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
>('profile/fetchProfileData', async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    try {
        const response = await extra.api.get<Profile>('/profile')

        if (!response.data) {
            throw new Error()
        }

        return response.data
    } catch (error) {
        return rejectWithValue('Error')
    }
})
