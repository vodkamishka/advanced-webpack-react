import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Profile, ProfileSchema } from '../types/profileTypes';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const initialState: ProfileSchema = {
    data: undefined,
    formData: undefined,
    isLoading: false,
    error: null,
    readonly: true
};
export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly(state: ProfileSchema, action: PayloadAction<boolean>) {
            state.readonly = action.payload;
        },
        cancelEdit(state: ProfileSchema) {
            state.readonly = true;
            state.formData = state.data;
        },
        updateProfile(state: ProfileSchema, action: PayloadAction<Profile>) {
            state.formData = {
                ...state.formData,
                ...action.payload
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchProfileData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.formData = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string; // Ошибка от сервера
            })
            .addCase(updateProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(updateProfileData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.formData = action.payload;
                state.readonly = true;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string; // Ошибка от сервера
            });
    },
})
export const { reducer: profileReducer } = profileSlice;

export const { setReadonly, updateProfile, cancelEdit } = profileSlice.actions;