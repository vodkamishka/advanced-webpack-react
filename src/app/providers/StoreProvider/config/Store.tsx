import { configureStore, EnhancedStore, ReducersMapObject, ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { counterReducer } from '../../../../entities/Counter';
import { userReducer, UserSchema } from '../../../../entities/User';
import { createReducerManager, ReducerManagerType } from './ReducerManager';
import { $api } from 'shared/api/api';
import { scrollReducer } from 'features/ScrollObserver';

export interface IStore extends EnhancedStore<StateSchema> {
    reducerManager?: ReducerManagerType
}

const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    scrollPosition: scrollReducer,
};

export const initialState: StateSchema = {
    counter: {
        value: 10
    },
    user: {} as UserSchema,
    scrollPosition: undefined,
}

const createStore = (): IStore => {

    const reducerManager = createReducerManager(rootReducer);

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    const store: IStore = configureStore<StateSchema>({
        preloadedState: initialState,
        reducer: reducerManager.reduce,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
    });

    store.reducerManager = reducerManager;
    
    return store;

}

export const store = createStore();

export type AppDispatch = ThunkDispatch<StateSchema, ThunkExtraArg, UnknownAction>;



