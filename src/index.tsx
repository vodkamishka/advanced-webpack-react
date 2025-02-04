import 'app/styles/index.scss';
import { createRoot } from 'react-dom/client';
import App from 'app/App';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'app/providers/ThemeProvider/ui/ThemeProvider';
import { Suspense } from 'react';
import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider, StoreSchema } from 'app/providers/StoreProvider/';

const root = createRoot(document.getElementById('root'));

export const initialState: StoreSchema = {
    counter: {
        value: 10
    },
    user: undefined
}

root.render(
    <StoreProvider initialState={initialState}>
        <BrowserRouter>
            <ThemeProvider>
                <ErrorBoundary>
                    <Suspense fallback="...Loading">
                        <App />
                    </Suspense>
                </ErrorBoundary>
            </ThemeProvider>
        </BrowserRouter>
    </StoreProvider>
);
