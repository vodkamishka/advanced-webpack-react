import { useTranslation } from 'react-i18next';
import { memo, useEffect, useState } from 'react';
import { Counter } from 'entities/Counter';

const MainPage = memo(function MainPage ()  {
    const { t } = useTranslation('main-page');

    const [error, setError] = useState(false);
    const onClick = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error('Что-то пошло не так!');
        }
    }, [error]);

    return (
        <div>
            {t('Главная страница')}
            <Counter/>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <button onClick={onClick}>throw error</button>
        </div>
    );
});

export default MainPage;
