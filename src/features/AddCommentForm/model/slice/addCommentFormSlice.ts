import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

import { type AddCommentFormSchema } from '../types/addCommentForm'

const initialState: AddCommentFormSchema = {
    error: undefined,
}

export const addCommentFormSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload
        },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(fetchProfileData.pending, (state, action) => {
    //         state.error = undefined
    //         state.isLoading = true
    //     })
    //     builder.addCase(
    //         fetchProfileData.fulfilled,
    //         (state, action: PayloadAction<Profile>) => {
    //             state.isLoading = false
    //             state.data = action.payload
    //             state.form = action.payload
    //         }
    //     )
    //     builder.addCase(fetchProfileData.rejected, (state, action) => {
    //         state.isLoading = false
    //         state.error = action.payload
    //     })
    // },
})

export const { actions: addCommentFormActions } = addCommentFormSlice
export const { reducer: addCommentFormReducer } = addCommentFormSlice
