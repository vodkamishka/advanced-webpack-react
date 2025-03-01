import { StateSchema } from 'app/providers/StoreProvider';
export const getArticlePageError = (state: Pick<StateSchema, 'articlePage'>) => state.articlePage?.error;
export const getArticlePageIsLoading = (state: Pick<StateSchema, 'articlePage'>) => state.articlePage?.isLoading;
export const getArticlePageView = (state: Pick<StateSchema, 'articlePage'>) => state.articlePage?.view;
export const getArticlePageNumber = (state: Pick<StateSchema, 'articlePage'>) => state.articlePage?.page;
export const getArticlePageLimit = (state: Pick<StateSchema, 'articlePage'>) => state.articlePage?.limit;
export const getArticlePageHasMore = (state: Pick<StateSchema, 'articlePage'>) => state.articlePage?.hasMore;

export const getArticlePageIsInit = (state: Pick<StateSchema, 'articlePage'>) => state.articlePage?._isInit;