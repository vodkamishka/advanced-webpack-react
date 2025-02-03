import { configureStore } from '@reduxjs/toolkit'
import { StoreSchema } from './StoreSchema';
import { counterReducer } from '../../../../entities/Counter';

export const createStore = (initialStore: StoreSchema) => {
    return configureStore({
        reducer: {
            counter: counterReducer,
        },
        preloadedState: initialStore, // начальное состояние
    })
}
