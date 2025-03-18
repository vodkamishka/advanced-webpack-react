import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { fetchCommentsByArticleId } from '../services/fetchCommentsByAtricleId/fetchCommentsByArticleId';

import { Comment } from '@/entities/Comment/model/types/commentTypes';
import { StateSchema } from '@/app/providers/StoreProvider';

const articleDetailsCommentsAdapter = createEntityAdapter({
    selectId: (comment: Comment) => comment.id,
})

export const getArticleDetailsCommentsSelectors = articleDetailsCommentsAdapter.getSelectors<StateSchema>(
    (state: StateSchema) => state?.articleDetailsPage?.comments || articleDetailsCommentsAdapter.getInitialState()
)
export const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsComments',
    initialState: articleDetailsCommentsAdapter.getInitialState({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {}
    }),
    reducers: undefined,
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
                state.isLoading = false;
                articleDetailsCommentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string; // Ошибка от сервера
            });
    },
})
export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
