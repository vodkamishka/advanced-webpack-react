import { createSelector } from '@reduxjs/toolkit';

import { ArticleDetailsPageSchema } from '../types';

import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleDetailsPage = (
    state: Pick<StateSchema, 'articleDetailsPage'>,
) => state.articleDetailsPage;

export const getArticleDetailsCommentsError = createSelector(
    getArticleDetailsPage,
    (articleDetailsPage: ArticleDetailsPageSchema) =>
        articleDetailsPage?.comments?.error,
);

export const getArticleDetailsCommentsIsLoading = createSelector(
    getArticleDetailsPage,
    (articleDetailsPage: ArticleDetailsPageSchema) =>
        articleDetailsPage?.comments?.isLoading,
);
