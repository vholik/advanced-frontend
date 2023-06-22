import { createAsyncThunk } from '@reduxjs/toolkit'

import {
    getUserDataByIdQuery,
    setJsonSettingsMutation,
} from '../../api/userApi'
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData'
import { getJsonSettings } from '../selectors/jsonSettings'
import { JsonSettings } from '../type/jsonSettings'

import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { User } from '../type/user'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initAuthData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState, dispatch } = thunkAPI
        const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY)

        if (!userId) {
            return rejectWithValue('auth error')
        }

        try {
            const response = await dispatch(
                getUserDataByIdQuery(userId),
            ).unwrap()

            if (!response.jsonSettings) {
                return rejectWithValue('error')
            }

            return response
        } catch (error) {
            return rejectWithValue('error')
        }
    },
)
