import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const MainPage = () => {
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
            <button onClick={onClick}>throw error</button>
        </div>
    );
};

export default MainPage;
