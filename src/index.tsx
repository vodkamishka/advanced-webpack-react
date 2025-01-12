import 'app/styles/index.scss';
import { createRoot } from 'react-dom/client';
import App from 'app/App';
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "app/providers/ThemeProvider/ui/ThemeProvider";
import {Suspense} from "react";
import 'shared/config/i18n/i18n';


const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <Suspense>
                <App />
            </Suspense>
        </ThemeProvider>
    </BrowserRouter>,
);
