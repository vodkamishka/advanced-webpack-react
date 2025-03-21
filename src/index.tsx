import '@/app/styles/index.scss';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

import App from '@/app/App';
import ThemeProvider from '@/app/providers/ThemeProvider/ui/ThemeProvider';
import '@/shared/config/i18n/i18n';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/StoreProvider/';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = createRoot(rootElement);

    root.render(
        <BrowserRouter>
            <StoreProvider>
                <ThemeProvider>
                    <ErrorBoundary>
                        <Suspense fallback="...Loading">
                            <AnimationProvider>
                                <App />
                            </AnimationProvider>
                        </Suspense>
                    </ErrorBoundary>
                </ThemeProvider>
            </StoreProvider>
        </BrowserRouter>,
    );
} else {
    console.error('Root element not found');
}
