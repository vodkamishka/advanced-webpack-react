import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Profile, ProfileSchema, ValidateProfileErrors } from '../types/profileTypes';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const initialState: ProfileSchema = {
    data: undefined,
    formData: undefined,
    isLoading: false,
    error: null,
    readonly: true,
    validateErrors: undefined,
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
            state.validateErrors = undefined;
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
                state.validateErrors = undefined;
            })
            .addCase(updateProfileData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.formData = action.payload;
                state.readonly = true;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                if (typeof action.payload === 'string') {
                    state.error = action.payload as string; // Ошибка от сервера
                }
                state.validateErrors = action.payload as ValidateProfileErrors[];
            });
    },
})
export const { reducer: profileReducer } = profileSlice;

export const { setReadonly, updateProfile, cancelEdit } = profileSlice.actions;