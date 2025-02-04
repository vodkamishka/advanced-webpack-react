import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/userTypes';

const initialState: UserSchema = {
    user:  undefined  // начальное состояние
};
export const counterSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
})

export const { setUser } = counterSlice.actions;
export const { reducer : userReducer } = counterSlice;