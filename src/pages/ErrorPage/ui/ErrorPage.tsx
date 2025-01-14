import { useTranslation } from 'react-i18next';

export const ErrorPage = () => {
    const onClick = () => window.location.reload();
    const { t } = useTranslation();
    return (
        <div>
            {t('Произошла ошибка')}
            <button onClick={onClick}>перезагрузите страницу</button>
        </div>
    );
};
