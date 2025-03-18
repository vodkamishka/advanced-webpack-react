import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { fetchCommentsByArticleId } from '../fetchCommentsByAtricleId/fetchCommentsByArticleId';

import { StateSchema, ThunkExtraArg } from '@/app/providers/StoreProvider/config/StateSchema';
import { getAuthData } from '@/entities/User';
import { getArticleData } from '@/entities/Article/model/selectors/getArticleData';



export const addCommentForArticle = createAsyncThunk<void, string, { extra: ThunkExtraArg; state: StateSchema; }>(
    'addCommentForm/addCommentForArticle',
    async (text , { extra, rejectWithValue, getState, dispatch }) => {
        try {
            
            const userData = getAuthData(getState());
            const article = getArticleData(getState());
            
            if (!text || !userData || !article) {
                return rejectWithValue('error');
            }
            
            await extra.api.post<void>('/comments', {
                articleId: article.id,
                text,
                userId: userData.id
            });
            
            dispatch(fetchCommentsByArticleId(article.id));
            
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data?.message || 'Fetch data failed');
            }
            return rejectWithValue('An unknown error occurred');
        }
    }
);