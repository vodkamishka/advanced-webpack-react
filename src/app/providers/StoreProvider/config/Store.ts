import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { StoreSchema } from './StoreSchema';
import { counterReducer } from '../../../../entities/Counter';
import { userReducer } from '../../../../entities/User';

const rootReducer: ReducersMapObject<StoreSchema> = {
    counter: counterReducer,
    user: userReducer
};

export const createStore = (initialStore: StoreSchema) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialStore, // начальное состояние
    })
}
