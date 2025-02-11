import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User/model/types/userTypes';
import { LoginSchema } from 'features/AuthByUsername/model/types/loginTypes';

export interface StateSchema {
    counter?: CounterSchema;
    user: UserSchema | undefined;

    // Асинхронные редюсеры
    loginForm?: LoginSchema;


}

export type StateSchemaKey = keyof StateSchema;