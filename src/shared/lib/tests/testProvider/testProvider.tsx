import { I18nextProvider } from 'react-i18next';
import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import i18n from '@/shared/config/i18n/i18nForTests';
import { StoreProvider } from '@/app/providers/StoreProvider/';

export const testProvider = (
    children: ReactNode
) => {
    return render(
        <MemoryRouter>
            <StoreProvider>
                <I18nextProvider i18n={i18n}>
                    {children}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    )
}