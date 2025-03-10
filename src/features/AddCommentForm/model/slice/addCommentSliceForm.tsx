import { createSlice } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/types';

const initialState: AddCommentFormSchema = {
    text: undefined,
    error: undefined
};
export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action) => {
            state.text = action.payload;
        },
    },
})

export const { setText } = addCommentFormSlice.actions;
export const { reducer : addCommentFormReducer } = addCommentFormSlice;