import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

import {
    type RestoreScrollSchema,
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
