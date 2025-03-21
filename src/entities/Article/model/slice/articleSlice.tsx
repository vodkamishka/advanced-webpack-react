import { createSlice } from '@reduxjs/toolkit';

import { ArticleDetailsSchema } from '../types/types';
import { fetchArticleById } from '../servises/fetchArticleById';

const initialState: ArticleDetailsSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};
export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchArticleById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string; // Ошибка от сервера
            });
    },
});
export const { reducer: articleReducer } = articleSlice;
