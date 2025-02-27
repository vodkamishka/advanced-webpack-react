import { StateSchema } from 'app/providers/StoreProvider';
export const getArticlePageError = (state: Pick<StateSchema, 'articlePage'>) => state.articlePage?.error;
export const getArticlePageIsLoading = (state: Pick<StateSchema, 'articlePage'>) => state.articlePage?.isLoading;
export const getArticlePageView = (state: Pick<StateSchema, 'articlePage'>) => state.articlePage?.view;