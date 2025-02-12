import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { ProfileSchema } from 'entities/Profile';

export interface StateSchema {
    counter?: CounterSchema;
    user: UserSchema | undefined;

    // Асинхронные редюсеры
    loginForm?: LoginSchema;
    profile?: ProfileSchema;


}

export type StateSchemaKey = keyof StateSchema;