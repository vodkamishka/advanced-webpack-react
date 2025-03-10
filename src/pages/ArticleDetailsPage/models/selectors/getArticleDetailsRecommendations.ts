import { createSelector } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { getArticleDetailsPage } from './getArticleDetailsComments';

export const getArticleDetailsRecommendationsError = createSelector(
    getArticleDetailsPage,
    (articleDetailsPage: ArticleDetailsPageSchema) => articleDetailsPage?.recommendations?.error
)

export const getArticleDetailsRecommendationsIsLoading = createSelector(
    getArticleDetailsPage,
    (articleDetailsPage: ArticleDetailsPageSchema) => articleDetailsPage?.recommendations?.isLoading
)