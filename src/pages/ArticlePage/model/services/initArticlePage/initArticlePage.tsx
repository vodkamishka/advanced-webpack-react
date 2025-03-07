import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import axios from 'axios';
import { fetchArticleList } from 'pages/ArticlePage/model/services/fetchArticleList/fetchArticleList';
import { initState, setOrder, setSearch, setSort } from 'pages/ArticlePage/model/slice/articlePageSlice';
import { getArticlePageIsInit } from '../../selectors/getArticlePageView';


export const initArticlePage = createAsyncThunk<void, URLSearchParams, { extra: ThunkExtraArg }>(
    'article/fetchCommentsByArticleId',
    async (searchParams , { rejectWithValue, dispatch, getState }) => {
        try {
            const isInit = getArticlePageIsInit(getState());
            if (!isInit) {

                const orderFromUrl = searchParams.get('order');
                const sortFromUrl = searchParams.get('sort');
                const searchFromUrl = searchParams.get('search');

                if (orderFromUrl) {
                    dispatch(setOrder(orderFromUrl));
                }
                if (sortFromUrl) {
                    dispatch(setSort(sortFromUrl));
                }
                if (searchFromUrl) {
                    dispatch(setSearch(searchFromUrl));
                }


                dispatch(initState());
                dispatch(fetchArticleList({ replace: true }));
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data?.message || 'Error');
            }
        }
    }
);