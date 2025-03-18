import { createEntityAdapter, createSlice, type EntityAdapter } from '@reduxjs/toolkit';

import { fetchArticleList } from '..//services/fetchArticleList/fetchArticleList';
import { Article, ArticleType, ArticleView, ArticleSortField } from '../../../../entities/Article';

import { StateSchema } from '@/app/providers/StoreProvider';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

const articlePageAdapter: EntityAdapter<Article, string> = createEntityAdapter({
    selectId: (article: Article) => article.id,
})

export const getArticlePageSelectors = articlePageAdapter.getSelectors<StateSchema>(
    (state: StateSchema) => state?.articlePage || articlePageAdapter.getInitialState(),
)
export const articlePageSlice = createSlice({
    name: 'articlePage',
    initialState: articlePageAdapter.getInitialState({
        isLoading: false,
        error: undefined,
        page: 1,
        ids: [],
        entities: {},
        limit: 4,
        view: ArticleView.SMALL,
        hasMore: true,
        isInit: false,
        order: 'asc',
        sort: ArticleSortField.VIEWS,
        search: '',
        type: ArticleType.IT
    }),
    reducers: {
        setView(state, action) {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        setPage(state, action) {
            state.page = action.payload;
        },
        setHasMore(state, action) {
            state.hasMore = action.payload;
        },
        initState(state) {
            const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.BIG ? 4 : 9;
            state.isInit = true ;
        },
        setOrder(state, action) {
            state.order = action.payload;
        },
        setSort(state, action) {
            state.sort = action.payload;
        },
        setSearch(state, action) {
            console.log(action.payload);
            state.search = action.payload;
        },
        setType(state, action) {
            state.type = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleList.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticleList.fulfilled, (state, action) => {
                state.isLoading = false;
                if (!action.payload?.length) {
                    state.hasMore = false;
                }

                if (action.meta.arg.replace) {
                    articlePageAdapter.setAll(state, action.payload);
                } else {
                    articlePageAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticleList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string; // Ошибка от сервера
            });
    },
})
export const { reducer: articlePageReducer } = articlePageSlice;

export const {
    setView,
    initState,
    setPage,
    setHasMore,
    setSort,
    setOrder,
    setSearch,
    setType
} = articlePageSlice.actions;