import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import axios from 'axios';
import { Article } from 'entities/Article';


export const fetchArticleList = createAsyncThunk<Article[], void, { extra: ThunkExtraArg }>(
    'articlePage/fetchCommentsByArticleId',
    async (_ , { extra, rejectWithValue }) => {
        try {

            const response = await extra.api.get<Article[]>('/articles/', {
                params: {
                    _expand: 'user'
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