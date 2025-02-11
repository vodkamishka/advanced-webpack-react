import { Action, configureStore,  ReducersMapObject, ThunkDispatch } from '@reduxjs/toolkit'
import {  StateSchema } from './StateSchema';
import { counterReducer } from '../../../../entities/Counter';
import { userReducer } from '../../../../entities/User';
import { createReducerManager, ReducerManagerType } from './ReducerManager';

type StoreType = ReturnType<typeof configureStore>
interface IStore extends StoreType {
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
    user: undefined,
}

export const reducerManager = createReducerManager(rootReducer);

export const store: IStore =  configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    preloadedState: initialState
});

store.reducerManager = reducerManager;

export type AppDispatch = ThunkDispatch<StateSchema, undefined, Action>;



