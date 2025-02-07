import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { StoreSchema } from './StoreSchema';
import { counterReducer } from '../../../../entities/Counter';
import { userReducer } from '../../../../entities/User';
import { loginReducer } from 'features/AuthByUsername';

const rootReducer: ReducersMapObject<StoreSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer
};

export const initialStore: StoreSchema = {
    counter: {
        value: 10
    },
    user: undefined,
    loginForm: {
        username: '',
        password: '',
        isLoading: false,
    }
}

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialStore, // начальное состояние
})


export type AppDispatch = typeof store.dispatch;



