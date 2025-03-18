import { type EntityState } from '@reduxjs/toolkit';

import { Article, ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { SortOrder } from '@/shared/types/types';


export interface ArticlePageSchema extends EntityState<Article, string> {
    isLoading?: boolean;
    error?: string;
    page: number;
    limit?: number;
    hasMore: boolean;
    _isInit?: boolean;

    // фильтры
    view: ArticleView;
    order: SortOrder,
    sort: ArticleSortField;
    search: string;
    type: ArticleType;


}