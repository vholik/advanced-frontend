import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'

import {
    type RestoreScrollSchema,
    ScrollSchema,
} from '../types/RestoreScrollSchema'

const initialState: RestoreScrollSchema = {
    scroll: {},
}

export const restoreScrollSlice = createSlice({
    name: 'restoreScroll',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{ path: string; position: number }>
        ) => {
            state.scroll[payload.path] = payload.position
        },
    },
})

export const { actions: restoreScrollActions } = restoreScrollSlice
export const { reducer: restoreScrollReducer } = restoreScrollSlice
