import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArg } from '@/app/providers/StoreProvider/config/StateSchema';
import axios from 'axios';
import { Comment } from '@/entities/Comment/model/types/commentTypes';


export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string, { extra: ThunkExtraArg }>(
    'article/fetchCommentsByArticleId',
    async (articleId , { extra, rejectWithValue }) => {
        try {


            const response = await extra.api.get<Comment[]>('/comments/', {
                params: {
                    articleId,
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