import { FC, ReactNode } from 'react';
import { createStore } from '../config/Store';
import { Provider } from 'react-redux'
import { StoreSchema } from '../config/StoreSchema';

interface StoreProviderProps {
    children: ReactNode;
    initialState: StoreSchema
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {

    const store = createStore(initialState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}