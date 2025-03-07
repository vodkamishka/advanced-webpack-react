import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';
import { memo } from 'react';
import { Page } from 'shared/ui/Page/ui/Page';

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
