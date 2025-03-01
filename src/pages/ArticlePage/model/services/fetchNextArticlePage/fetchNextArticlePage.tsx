import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import axios from 'axios';
import { Article } from 'entities/Article';
import { fetchArticleList } from 'pages/ArticlePage/model/services/fetchArticleList/fetchArticleList';
import { setPage } from 'pages/ArticlePage/model/slice/articlePageSlice';
import { getArticlePageHasMore, getArticlePageNumber } from '../../selectors/getArticlePageView';


export const fetchNextArticlePage = createAsyncThunk<Article[], void, { extra: ThunkExtraArg }>(
    'article/fetchCommentsByArticleId',
    async (_ , { rejectWithValue, dispatch, getState }) => {
        try {
            const hasMore = getArticlePageHasMore(getState());
            const page = getArticlePageNumber(getState());
            if (hasMore) {
                dispatch(fetchArticleList(page + 1));
                dispatch(setPage(page + 1));
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data?.message || 'Error');
            }
        }
    }
);