import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage';
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { ArticlePageSchema } from 'pages/ArticlePage';
import { ScrollSchema } from 'features/ScrollObserver';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    scrollPosition: ScrollSchema;

    // Асинхронные редюсеры
    loginForm?: LoginSchema | undefined;
    profile?: ProfileSchema | undefined;
    articleDetails?: ArticleDetailsSchema;
    articleDetailsPage?: ArticleDetailsPageSchema;
    addCommentForm?: AddCommentFormSchema;
    articlePage?: ArticlePageSchema,

}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export type StateSchemaKey = keyof StateSchema;