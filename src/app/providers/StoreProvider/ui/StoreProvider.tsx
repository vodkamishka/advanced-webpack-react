import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux'
import { StateSchema } from 'app/providers/StoreProvider';
import { createStore, IStore } from 'app/providers/StoreProvider/config/Store';
import { useNavigate } from 'react-router-dom';

interface StoreProviderProps {
    children: ReactNode;
    initialState?: StateSchema;
}

export let store: IStore;
export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {

    const navigate = useNavigate();

    store = createStore(navigate);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}



