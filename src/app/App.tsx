import { Sidebar } from 'widgets/sidebar';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/navbar';
import { AppRouter } from 'app/providers/router';
import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect } from 'react';
import { initAuthData } from 'entities/User';
import { useDispatch } from 'react-redux';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;
