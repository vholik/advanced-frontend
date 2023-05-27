import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import axios from 'axios'
import { userActions, type User } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

import { ValidateProfileError, type Profile } from '../../types/profile'
import { getProfileForm } from '../../selector/getProfileForm/getProfileForm'
import { validateProfileData } from '../validateProfileData/validateProfileData'

interface LoginByUsernameProps {
    username: string
    password: string
}

export enum LoginErrors {
    INCORRECT_DATA = '',
}

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI
    const formData = getProfileForm(getState())

    const errors = validateProfileData(formData)

    if (errors.length) {
        return rejectWithValue(errors)
    }

    try {
        const response = await extra.api.put<Profile>('/profile', formData)

        if (!response.data) {
            throw new Error()
        }

        return response.data
    } catch (error) {
        return rejectWithValue([ValidateProfileError.SERVER_ERROR])
    }
})
