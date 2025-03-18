import { useTranslation } from 'react-i18next';
import { memo } from 'react';

import cls from './NotFoundPage.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/shared/ui/Page/ui/Page';

interface NotFoundPageProps {
    className?: string;
}
export const NotFoundPage = memo(function NotFoundPage ({ className }: NotFoundPageProps) {
    const { t } = useTranslation();
    return (
        <Page>
            <div className={classNames(cls.NotFoundPage, {}, [className])}>
                {t('Страница не найдена')}
            </div>
        </Page>

    );
});
