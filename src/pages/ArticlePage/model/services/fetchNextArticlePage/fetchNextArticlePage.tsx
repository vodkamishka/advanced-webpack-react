import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArg } from '@/app/providers/StoreProvider/config/StateSchema';
import axios from 'axios';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';
import { setPage } from '../../slice/articlePageSlice';
import { getArticlePageHasMore, getArticlePageNumber } from '../../selectors/getArticlePageView';


export const fetchNextArticlePage = createAsyncThunk<void, void, { extra: ThunkExtraArg }>(
    'article/fetchNextArticlePage',
    async (_ , { rejectWithValue, dispatch, getState }) => {
        try {
            const hasMore = getArticlePageHasMore(getState());
            const page = getArticlePageNumber(getState());
            if (hasMore) {
                dispatch(setPage(page + 1));
                dispatch(fetchArticleList({ replace: false }));
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data?.message || 'Error');
            }
        }
    }
);