import { ArticleDetailsCommentsSchema, ArticleDetailsRecommendationsSchema } from './types';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommendations: ArticleDetailsRecommendationsSchema;
}