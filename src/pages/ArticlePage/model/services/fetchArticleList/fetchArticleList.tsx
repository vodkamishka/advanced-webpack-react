import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { Article, ArticleType } from '../../../../../entities/Article';
import {
    getArticlePageLimit,
    getArticlePageNumber,
    getArticlePageOrder, getArticlePageSearch,
    getArticlePageSort, getArticlePageType
} from '../../selectors/getArticlePageView';

import { ThunkExtraArg } from '@/app/providers/StoreProvider/config/StateSchema';
import { addQueryParams } from '@/shared/lib/url/addQueryParams';

interface FetchArticleListProps {
    replace?: boolean;
}
export const fetchArticleList = createAsyncThunk<Article[],  FetchArticleListProps, { extra: ThunkExtraArg }>(
    'articlePage/fetchCommentsByArticleId',
    async (props , { extra, rejectWithValue, getState }) => {

        const page = getArticlePageNumber(getState());
        const limit = getArticlePageLimit(getState());
        const order = getArticlePageOrder(getState());
        const sort = getArticlePageSort(getState());
        const search = getArticlePageSearch(getState());
        const type = getArticlePageType(getState());

        try {

            addQueryParams({
                sort, order, search, type,
            });

            const response = await extra.api.get<Article[]>('/articles/', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit,
                    _sort: sort,
                    _order: order,
                    q: search,
                    type: type === ArticleType.ALL ? undefined : type,
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