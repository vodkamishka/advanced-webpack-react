import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleDetails } from '../../../../entities/Article';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getArticleDetailsCommentsError } from '../../models/selectors/getArticleDetailsComments';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/shared/ui/Page/ui/Page';
import { articleDetailsPageReducer } from '../../models/slice/';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleRecommendationsList } from '@/features/ArticleRecommedationsList';
import { ArticleDetailsComments } from '../../ui/ArticleDetailsComments/ArticleDetailsComments';


interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};


const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {

    const { id } = useParams<{ id: string }>();

    const error = useSelector(getArticleDetailsCommentsError);

    if (!id) {
        return (
            // eslint-disable-next-line i18next/no-literal-string
            <div className={classNames(cls.articleDetailsPage, {}, [className])}>
                &#39;Статья не найдена&#39;
            </div>
        );
    }

    if (error) {
        return (
            <div>{error}</div>
        )
    }
 
    return (
        <Page>
            <DynamicModuleLoader asyncReducers={reducers} removeAfterUnmount>
                <ArticleDetailsPageHeader/>
                <ArticleDetails id={id}/>
                <ArticleRecommendationsList/>
                <ArticleDetailsComments id={id}/>
            </DynamicModuleLoader>
        </Page>
        
    );
};

export default ArticleDetailsPage;
