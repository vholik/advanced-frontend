import { type CounterSchema } from '../types/counterSchema'

import { buildSlice } from '@/shared/lib/store'

const initialState: CounterSchema = {
    value: 0,
}

export const counterSlice = buildSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value++
        },
        decrement: (state) => {
            state.value--
        },
    },
})

export const { actions: counterActions, useActions: useCounterActions } =
    counterSlice
export const { reducer: counterReducer } = counterSlice
