import { type AxiosInstance } from 'axios';

import { CounterSchema } from '@/entities/Counter';
import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthByUsername';
import { ArticleDetailsSchema } from '@/entities/Article';
import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage';
import { AddCommentFormSchema } from '@/features/AddCommentForm';
import { ArticlePageSchema } from '@/pages/ArticlePage';
import { ScrollSchema } from '@/features/ScrollObserver';
import { rtkApi } from '@/shared/api/rtkApi';
import { ProfileSchema } from '@/features/EditableProfileCard/model/types/types';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    scrollPosition: ScrollSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

    // Асинхронные редюсеры
    loginForm?: LoginSchema | undefined;
    profile?: ProfileSchema | undefined;
    articleDetails?: ArticleDetailsSchema;
    articleDetailsPage?: ArticleDetailsPageSchema;
    addCommentForm?: AddCommentFormSchema;
    articlePage?: ArticlePageSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export type StateSchemaKey = keyof StateSchema;
