import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type Profile } from '@/entities/Profile'

import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { type ProfileSchema } from '../types/editableProfileCardSchema'

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            }
        },
        cancelEdit: (state) => {
            state.readonly = true
            state.validateError = []
            state.form = state.data
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProfileData.pending, (state, action) => {
            state.error = undefined
            state.isLoading = true
        })
        builder.addCase(
            fetchProfileData.fulfilled,
            (state, action: PayloadAction<Profile>) => {
                state.isLoading = false
                state.data = action.payload
                state.form = action.payload
            }
        )
        builder.addCase(fetchProfileData.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
        builder.addCase(updateProfileData.pending, (state, action) => {
            state.validateError = undefined
            state.isLoading = true
        })
        builder.addCase(
            updateProfileData.fulfilled,
            (state, action: PayloadAction<Profile>) => {
                state.isLoading = false
                state.data = action.payload
                state.form = action.payload
            }
        )
        builder.addCase(updateProfileData.rejected, (state, action) => {
            state.isLoading = false
            state.validateError = action.payload
        })
    },
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
