import 'app/styles/index.scss';
import { createRoot } from 'react-dom/client';
import App from 'app/App';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'app/providers/ThemeProvider/ui/ThemeProvider';
import { Suspense } from 'react';
import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider/';

const root = createRoot(document.getElementById('root'));


root.render(
    <StoreProvider>
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
