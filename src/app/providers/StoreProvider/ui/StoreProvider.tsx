import { FC, ReactNode } from 'react';
import { store } from '../config/Store';
import { Provider } from 'react-redux'

interface StoreProviderProps {
    children: ReactNode;
}

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}


