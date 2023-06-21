import { createAsyncThunk } from '@reduxjs/toolkit'

import { setJsonSettingsMutation } from '../../api/userApi'
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData'
import { getJsonSettings } from '../selectors/jsonSettings'
import { JsonSettings } from '../type/jsonSettings'

import { type ThunkConfig } from '@/app/providers/StoreProvider'

export const saveJsonSettings = createAsyncThunk<
    JsonSettings,
    JsonSettings,
    ThunkConfig<string>
>('user/saveJsonSettings', async (newJsonSettings, thunkAPI) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkAPI
    const userData = getUserAuthData(getState())
    const currentSettings = getJsonSettings(getState())

    if (!userData) {
        return rejectWithValue('auth error')
    }

    try {
        const response = await dispatch(
            setJsonSettingsMutation({
                userId: userData.id,
                jsonSettings: {
                    ...currentSettings,
                    ...newJsonSettings,
                },
            }),
        ).unwrap()

        if (!response.jsonSettings) {
            return rejectWithValue('error')
        }

        return response.jsonSettings
    } catch (error) {
        return rejectWithValue('error')
    }
})
