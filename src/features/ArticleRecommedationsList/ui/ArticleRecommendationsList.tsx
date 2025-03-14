import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/Text';
import { TextSize } from '@/shared/ui/Text/ui/Text';
import cls from '@/pages/ArticleDetailsPage/ui/ArticleDatailsPage/ArticleDetailsPage.module.scss';
import { ArticleList } from '@/entities/Article/ui/ArticleList/ArticleList';
import { useArticleRecommendationsList } from '../api/ArticleRecommendationsApi';

interface ArticleRecommendationListProps {
    className?: string
}

export const ArticleRecommendationsList = ({ className }: ArticleRecommendationListProps) => {
    const { t } = useTranslation();

    const { isLoading, data: articles, error } = useArticleRecommendationsList(3);

    if (isLoading || error) {
        return null;
    }
    return (
        <div className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                className={cls.commentTitle}
                title={t('Рекомендуем')}
            />
            <ArticleList
                articles={articles}
                isLoading={isLoading}
                className={cls.recommendations}
                target="_blank"
            />
        </div>
    );
};
