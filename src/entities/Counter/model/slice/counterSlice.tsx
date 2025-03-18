import { createSlice } from '@reduxjs/toolkit';
import { buildSlice } from '@/shared/lib/store';

const initialState = {
    value: 0,  // начальное состояние
};
export const counterSlice = buildSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
    },
})

export const {
    actions: counterActions,
    reducer: counterReducer,
    useActions: useCounterActions,
} = counterSlice;