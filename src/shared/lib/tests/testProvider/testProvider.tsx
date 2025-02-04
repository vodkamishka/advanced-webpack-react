import i18n from 'shared/config/i18n/i18nForTests';
import { I18nextProvider } from 'react-i18next';
import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider/';
import { StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema';

export const testInitialState: StoreSchema = {
    counter: {
        value: 10
    },
    user: undefined
}

export const testProvider = (
    children: ReactNode,
    initialState: StoreSchema = testInitialState
) => {
    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter>
                <I18nextProvider i18n={i18n}>
                    {children}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    )
}