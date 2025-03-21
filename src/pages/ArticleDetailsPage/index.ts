export { articleDetailsPageReducer } from './models/slice';

export type { ArticleDetailsPageSchema } from './models/types';

export { fetchCommentsByArticleId } from './models/services/fetchCommentsByAtricleId/fetchCommentsByArticleId';

export { articleDetailsCommentsSlice } from './models/slice/articleDetailsCommentsSlice';

export type {
    ArticleDetailsCommentsSchema,
    ArticleDetailsRecommendationsSchema,
} from './models/types/types';

export { ArticleDetailsPageAsync as ArticleDetailsPage } from './ui/ArticleDatailsPage/ArticleDetailsPage.async';
