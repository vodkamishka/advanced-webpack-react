import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import axios from 'axios';
import { fetchArticleList } from 'pages/ArticlePage/model/services/fetchArticleList/fetchArticleList';
import { initState } from 'pages/ArticlePage/model/slice/articlePageSlice';
import { getArticlePageIsInit } from '../../selectors/getArticlePageView';


export const initArticlePage = createAsyncThunk<void, void, { extra: ThunkExtraArg }>(
    'article/fetchCommentsByArticleId',
    async (_ , { rejectWithValue, dispatch, getState }) => {
        try {
            const isInit = getArticlePageIsInit(getState());
            if (!isInit) {
                dispatch(initState());
                dispatch(fetchArticleList(1));
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data?.message || 'Error');
            }
        }
    }
);