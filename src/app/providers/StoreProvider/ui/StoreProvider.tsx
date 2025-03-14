import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux'
import { StateSchema } from '@/app/providers/StoreProvider';
import { store } from '@/app/providers/StoreProvider/config/Store';

interface StoreProviderProps {
    children: ReactNode;
    initialState?: StateSchema;
}
export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}



