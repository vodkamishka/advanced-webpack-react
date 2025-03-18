import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { Article } from '../types/articleTypes';

import { ThunkExtraArg } from '@/app/providers/StoreProvider/config/StateSchema';


export const fetchArticleById = createAsyncThunk<Article, string, { extra: ThunkExtraArg }>(
    'article/fetchArticleById',
    async (id , { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<Article>(`/articles/${id}`, {
                params: {
                    _expand: 'user',
                },
            });

            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data?.message || 'Fetch data failed');
            }
            return rejectWithValue('An unknown error occurred');
        }
    }
);