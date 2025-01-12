import {useTranslation} from "react-i18next";

const MainPage = () => {
    const { t, i18n } = useTranslation('main-page');
    return (
        <div>
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;