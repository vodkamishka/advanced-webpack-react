import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User/model/types/userTypes';
import { LoginSchema } from 'features/AuthByUsername/model/types/loginTypes';

export interface StoreSchema {
    counter?: CounterSchema;
    user: UserSchema | undefined;
    loginForm: LoginSchema
}