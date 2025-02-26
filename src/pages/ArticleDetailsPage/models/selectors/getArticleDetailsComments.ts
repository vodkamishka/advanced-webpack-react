import { StateSchema } from 'app/providers/StoreProvider';
export const getArticleDetailsCommentsError = (state: Pick<StateSchema, 'articleDetailsComments'>) => state.articleDetailsComments?.error;
export const getArticleDetailsCommentsIsLoading = (state: Pick<StateSchema, 'articleDetailsComments'>) => state.articleDetailsComments?.isLoading;