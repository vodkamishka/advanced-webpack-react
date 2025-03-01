import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from 'app/providers/router';
import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect } from 'react';
import { initAuthData } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import { getIsInit } from 'entities/User/model/selectors/getIsInit/getIsInit';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    const isInit = useSelector(getIsInit);

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className="content-page">
                <Sidebar />
                {isInit && <AppRouter/>}
            </div>
        </div>
    );
};

export default App;
