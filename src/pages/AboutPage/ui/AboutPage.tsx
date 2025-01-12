import {useTranslation} from "react-i18next";


const AboutPage = () => {
    const { t, i18n } = useTranslation('about-page');
    return (
        <div>
            {t('Страница о нас')}
        </div>
    );
};

export default AboutPage;