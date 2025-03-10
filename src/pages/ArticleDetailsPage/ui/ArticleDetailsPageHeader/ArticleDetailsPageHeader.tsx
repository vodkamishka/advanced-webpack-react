import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './ArticleDetailsPageHeader.module.scss';
import { useSelector } from 'react-redux';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { getArticleData } from 'entities/Article/model/selectors/getArticleData';
import { getArticleCanEdit } from '../../models/selectors/getArticleCanEdit';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(function ArticleDetailsPageHeader(props: ArticleDetailsPageHeaderProps) {
    const { className } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const canEdit = useSelector(getArticleCanEdit);
    const article = useSelector(getArticleData);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.article_details}/${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
        <div className={classNames(cls.articleDetailsPageHeader, {}, [className])}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                {t('Назад к списку')}
            </Button>
            {canEdit && (
                <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEditArticle}
                >
                    {t('Редактировать')}
                </Button>
            )}
        </div>
    );
});