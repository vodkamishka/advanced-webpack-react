import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import axios from 'axios';
import { Article } from 'entities/Article';
import { getArticlePageLimit } from '../../selectors/getArticlePageView';


export const fetchArticleList = createAsyncThunk<Article[],  number, { extra: ThunkExtraArg }>(
    'articlePage/fetchCommentsByArticleId',
    async (page , { extra, rejectWithValue, getState }) => {
        try {
            
            const limit = getArticlePageLimit(getState());

            const response = await extra.api.get<Article[]>('/articles/', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit
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