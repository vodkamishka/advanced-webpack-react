import { useTranslation } from 'react-i18next';
import { memo } from 'react';

import { Page } from '@/shared/ui/Page/ui/Page';

const AboutPage = memo(function AboutPage() {
    const { t } = useTranslation('about-page');
    return <Page>{t('Страница о нас')}</Page>;
});

export default AboutPage;
