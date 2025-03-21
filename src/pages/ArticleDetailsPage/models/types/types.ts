import { type EntityState } from '@reduxjs/toolkit';

import { Comment } from '@/entities/Comment';
import { Article } from '@/entities/Article';

export interface ArticleDetailsCommentsSchema
    extends EntityState<Comment, string> {
    isLoading?: boolean;
    error?: string;
}

export interface ArticleDetailsRecommendationsSchema
    extends EntityState<Article, string> {
    isLoading?: boolean;
    error?: string;
}
