import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from 'app/providers/router';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useEffect, useState } from 'react';
import { initAuthData } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getIsInit } from 'entities/User/model/selectors/getIsInit/getIsInit';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const { t } = useTranslation('about-page');

    const isInit = useSelector(getIsInit);

    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount((prev) => prev + 1);
    }, [])

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <div>{count}</div>
            <button onClick={handleClick}>{t('Увеличить')}</button>
            <Navbar />
            <div className="content-page">
                <Sidebar />
                {isInit && <AppRouter/>}
            </div>
        </div>
    );
};

export default App;
