import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User/model/types/userTypes';

export interface StoreSchema {
    counter?: CounterSchema;
    user: UserSchema | undefined;
}