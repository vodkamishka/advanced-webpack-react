import {
    configureStore,
    type EnhancedStore,
    type ReducersMapObject,
    type ThunkDispatch,
    type UnknownAction,
} from '@reduxjs/toolkit';

import { counterReducer } from '../../../../entities/Counter';
import { userReducer, UserSchema } from '../../../../entities/User';

import { StateSchema, ThunkExtraArg } from './StateSchema';
import { createReducerManager, ReducerManagerType } from './ReducerManager';

import { $api } from '@/shared/api/api';
import { scrollReducer } from '@/features/ScrollObserver';
import { rtkApi } from '@/shared/api/rtkApi';

export interface IStore extends EnhancedStore<StateSchema> {
    reducerManager?: ReducerManagerType;
}

const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    scrollPosition: scrollReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
};

export const initialState: StateSchema = {
    counter: {
        value: 10,
    },
    user: {} as UserSchema,
    scrollPosition: undefined,
    [rtkApi.reducerPath]: undefined,
};

const createStore = (): IStore => {
    const reducerManager = createReducerManager(rootReducer);

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    const store: IStore = configureStore<StateSchema>({
        preloadedState: initialState,
        reducer: reducerManager.reduce,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }).concat(rtkApi.middleware) as unknown as ReturnType<
                typeof getDefaultMiddleware
            >,
    });

    store.reducerManager = reducerManager;

    return store;
};

export const store = createStore();

export type AppDispatch = ThunkDispatch<
    StateSchema,
    ThunkExtraArg,
    UnknownAction
>;
