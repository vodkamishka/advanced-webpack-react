import { useTranslation } from 'react-i18next';
import { memo } from 'react';

const AboutPage = memo(function AboutPage () {
    const { t } = useTranslation('about-page');
    return (
        <div>
            {t('Страница о нас')}
        </div>
    );
});

export default AboutPage;
