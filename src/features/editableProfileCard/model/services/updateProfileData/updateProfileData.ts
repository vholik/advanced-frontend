import { createAsyncThunk } from '@reduxjs/toolkit'

import { ValidateProfileError } from '../../consts/consts'
import { getProfileForm } from '../../selector/getProfileForm/getProfileForm'
import { validateProfileData } from '../validateProfileData/validateProfileData'

import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { type Profile } from '@/entities/Profile'


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

    if (!formData?.id) {
        return rejectWithValue([ValidateProfileError.NO_DATA])
    }

    try {
        const response = await extra.api.put<Profile>(
            `/profile/${formData?.id}`,
            formData
        )

        if (!response.data) {
            throw new Error()
        }

        return response.data
    } catch (error) {
        return rejectWithValue([ValidateProfileError.SERVER_ERROR])
    }
})
