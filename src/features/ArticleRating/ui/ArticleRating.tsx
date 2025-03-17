import { useTranslation } from 'react-i18next';
import { useGetArticleRating, useRateArticle } from '@/features/ArticleRating/api/articleRatingApi';
import { useSelector } from 'react-redux';
import { getAuthData } from '@/entities/User';
import { useCallback } from 'react';
import { RatingCard } from '@/entities/Rating';


interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

export const ArticleRating = ({ className, articleId }: ArticleRatingProps) => {
    const { t } = useTranslation();
    const userData = useSelector(getAuthData);

    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userData?.id ?? '',
    });

    const [rateArticleMutation] = useRateArticle();

    const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                userId: userData?.id ?? '',
                articleId,
                rate: starsCount,
                feedback,
            });
        } catch (e) {
            // handle error
            console.log(e);
        }
    }, [articleId, rateArticleMutation, userData?.id]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateArticle(starsCount, feedback);
    }, [handleRateArticle]);

    const onCancel = useCallback((starsCount: number) => {
        handleRateArticle(starsCount);
    }, [handleRateArticle]);

    const rating = data?.[0];
    
    return (
        <RatingCard
            onCancel={onCancel}
            onAccept={onAccept}
            rate={rating?.rate}
            className={className}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте свой отзыв о статье, это поможет улучшить качество')}
            hasFeedback
        />
    );
};
