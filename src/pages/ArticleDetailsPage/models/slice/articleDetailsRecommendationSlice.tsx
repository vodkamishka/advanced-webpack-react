import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import {
    fetchArticleRecommendations
} from '../services/fetchArticleRecommendations/fecthArticleRecommendations';

import { StateSchema } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';

const articleDetailsRecommendationsAdapter = createEntityAdapter({
    selectId: (article: Article) => article.id,
})

export const getArticleDetailsRecommendationsSelectors = articleDetailsRecommendationsAdapter.getSelectors<StateSchema>(
    (state: StateSchema) => state?.articleDetailsPage?.recommendations || articleDetailsRecommendationsAdapter.getInitialState(),
)
export const articleDetailsRecommendationsSlice = createSlice({
    reducerPath: undefined, reducers: undefined, selectors: undefined,
    name: 'articleDetailsRecommendations',
    initialState: articleDetailsRecommendationsAdapter.getInitialState({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {}
    }),
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
                state.isLoading = false;
                articleDetailsRecommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string; // Ошибка от сервера
            });
    }
})
export const { reducer: articleDetailsRecommendationsReducer } = articleDetailsRecommendationsSlice;