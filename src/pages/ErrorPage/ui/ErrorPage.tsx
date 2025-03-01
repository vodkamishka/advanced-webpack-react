import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'shared/ui/Page/ui/Page';

export const ErrorPage = memo(function ErrorPage () {
    const onClick = () => window.location.reload();
    const { t } = useTranslation();
    return (
        <Page>
            {t('Произошла ошибка')}
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <button onClick={onClick}>перезагрузите страницу</button>
        </Page>
    );
});
