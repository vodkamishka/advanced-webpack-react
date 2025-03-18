import { useTranslation } from 'react-i18next';
import { memo } from 'react';

import { Page } from '@/shared/ui/Page/ui/Page';

export const AdminPage = memo(function AboutPage () {
    const { t } = useTranslation('about-page');
    return (
        <Page>
            {t('Страница администратора')}
        </Page>
    );
});

