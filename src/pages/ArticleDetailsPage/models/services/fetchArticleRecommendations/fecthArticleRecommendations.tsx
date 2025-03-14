import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArg } from '@/app/providers/StoreProvider/config/StateSchema';
import axios from 'axios';
import { Article } from '@/entities/Article';

export const fetchArticleRecommendations = createAsyncThunk<Article[], void, { extra: ThunkExtraArg }>(
    'article/fetchArticleRecommendations',
    async (_ , { extra, rejectWithValue }) => {
        try {

            const response = await extra.api.get<Article[]>('/articles/', {
                params: {
                    _expand: 'user',
                    _limit: 4,
                }
            });

            if (!response.data) {
                return rejectWithValue('No data received');
            }

            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data?.message || 'Fetch data failed');
            }
            return rejectWithValue('An unknown error occurred');
        }
    }
);