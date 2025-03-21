import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { ArticleDetails } from '../../../../entities/Article';
import { getArticleDetailsCommentsError } from '../../models/selectors/getArticleDetailsComments';
import { articleDetailsPageReducer } from '../../models/slice/';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsComments } from '../../ui/ArticleDetailsComments/ArticleDetailsComments';

import cls from './ArticleDetailsPage.module.scss';

import { ArticleRecommendationsList } from '@/features/ArticleRecommedationsList';
import { Page } from '@/shared/ui/Page/ui/Page';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleRating } from '@/features/ArticleRating/ui/ArticleRating';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();

    const error = useSelector(getArticleDetailsCommentsError);

    if (!id) {
        return (
            <div
                className={classNames(cls.articleDetailsPage, {}, [className])}
            >
                {t('Статья не найдена')}
            </div>
        );
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <Page>
            <DynamicModuleLoader asyncReducers={reducers} removeAfterUnmount>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <ArticleRating articleId={id} />
                <ArticleRecommendationsList />
                <ArticleDetailsComments id={id} />
            </DynamicModuleLoader>
        </Page>
    );
};

export default ArticleDetailsPage;
