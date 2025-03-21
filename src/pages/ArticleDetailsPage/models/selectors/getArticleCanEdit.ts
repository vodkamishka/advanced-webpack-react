import { createSelector } from '@reduxjs/toolkit';

import { getArticleData } from '@/entities/Article/model/selectors/getArticleData';
import { getAuthData } from '@/entities/User';

export const getArticleCanEdit = createSelector(
    getArticleData,
    getAuthData,
    (article, user) => {
        if (!article || !user) {
            return false;
        }

        return article.user.id === user.id;
    },
);
