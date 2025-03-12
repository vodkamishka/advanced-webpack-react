export  { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/models/slice';

export type { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage/models/types';

export {
    fetchCommentsByArticleId
} from './models/services/fetchCommentsByAtricleId/fetchCommentsByArticleId';

export { articleDetailsCommentsSlice } from './models/slice/articleDetailsCommentsSlice';

export type { ArticleDetailsCommentsSchema, ArticleDetailsRecommendationsSchema } from 'pages/ArticleDetailsPage/models/types/types';

export { ArticleDetailsPage } from './ui/ArticleDatailsPage/ArticleDetailsPage';
