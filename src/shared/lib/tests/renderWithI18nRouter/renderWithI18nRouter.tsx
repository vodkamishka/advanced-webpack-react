import i18n from 'shared/config/i18n/i18nForTests';
import { I18nextProvider } from "react-i18next";
import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';

export const renderWithI18nRouter = (children: ReactNode) => {
    return render(
        <MemoryRouter>
            <I18nextProvider i18n={i18n}>
                {children}
            </I18nextProvider>
        </MemoryRouter>
    )
}