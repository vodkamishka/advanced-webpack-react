import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';

export interface StateSchema {
    counter?: CounterSchema;
    user: UserSchema | undefined;

    // Асинхронные редюсеры
    loginForm?: LoginSchema;
    profile?: ProfileSchema;


}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void,
}

export type StateSchemaKey = keyof StateSchema;