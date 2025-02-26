import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleData = (state: Pick<StateSchema, 'articleDetails'>) => {
    console.log('state', state);
    return state.articleDetails?.data;
}
export const getArticleError = (state: Pick<StateSchema, 'articleDetails'>) => state.articleDetails?.error;
export const getArticleIsLoading = (state: Pick<StateSchema, 'articleDetails'>) => state.articleDetails?.isLoading;