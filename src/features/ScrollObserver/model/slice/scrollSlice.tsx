import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSchema } from '../types/types';

const initialState: ScrollSchema = {
    scroll: {},
};
export const scrollSlice = createSlice({
    name: 'scroll',
    initialState,
    reducers: {
        setScrollPosition: (state, action: PayloadAction<{pathname: string, value: number}>) => {
            state.scroll[action.payload.pathname] = action.payload.value
        },
    },
})

export const { setScrollPosition } = scrollSlice.actions;
export const { reducer: scrollReducer } = scrollSlice;