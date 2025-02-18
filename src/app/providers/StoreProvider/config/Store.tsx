import { configureStore, EnhancedStore, ReducersMapObject, ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { counterReducer } from '../../../../entities/Counter';
import { userReducer, UserSchema } from '../../../../entities/User';
import { createReducerManager, ReducerManagerType } from './ReducerManager';
import { $api } from 'shared/api/api';
import { NavigateOptions, To } from 'react-router-dom';

export interface IStore extends EnhancedStore<StateSchema> {
    reducerManager?: ReducerManagerType
}

const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
};

export const initialState: StateSchema = {
    counter: {
        value: 10
    },
    user: {} as UserSchema,
}

export const createStore = (
    navigate: (to: To, options?: NavigateOptions) => void,
): IStore => {

    const reducerManager = createReducerManager(rootReducer);

    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate,
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

export type AppDispatch = ThunkDispatch<StateSchema, ThunkExtraArg, UnknownAction>;



