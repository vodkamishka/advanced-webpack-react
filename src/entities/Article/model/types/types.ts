import { Article } from './articleTypes';

export interface ArticleDetailsSchema {
    data?: Article;
    isLoading: boolean;
    error?: string;
}
