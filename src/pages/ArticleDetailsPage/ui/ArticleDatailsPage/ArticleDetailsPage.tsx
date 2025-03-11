import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from '../../../../entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text';
import { CommentList } from '../../../../entities/Comment';
import { useSelector } from 'react-redux';
import {
    getArticleDetailsCommentsError,
    getArticleDetailsCommentsIsLoading
} from '../../models/selectors/getArticleDetailsComments';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import {
    fetchCommentsByArticleId
} from '../../models/services/fetchCommentsByAtricleId/fetchCommentsByArticleId';
import {
    getArticleDetailsCommentsSelectors
} from '../../models/slice/articleDetailsCommentsSlice';
import AddCommentForm from 'features/AddCommentForm/ui/AddCommentForm';
import { addCommentForArticle } from '../../models/services/addCommentForArticle/addCommentForArticle';
import { getAddCommentFormText } from 'features/AddCommentForm/model/selectors/getAddCommentFormText';
import { Page } from 'shared/ui/Page/ui/Page';
import { articleDetailsPageReducer } from '../../models/slice/';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleRecommendationsList } from 'features/ArticleRecommedationsList';


interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};


export const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {

    const { id } = useParams<{ id: string }>();
    
    const error = useSelector(getArticleDetailsCommentsError);
    const isLoading = useSelector(getArticleDetailsCommentsIsLoading);

    const comments = useSelector(getArticleDetailsCommentsSelectors.selectAll);

    const dispatch = useAppDispatch();
    
    const text = useSelector(getAddCommentFormText);

    const onSendComment = useCallback(() => {
        dispatch(addCommentForArticle(text));
    }, [dispatch, text])

    useEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    }, [dispatch, id]);

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
                <Text title={'Коммментарии'}/>
                <AddCommentForm onSendComment={onSendComment}/>
                <CommentList
                    isLoading={isLoading}
                    comments={comments}
                />
            </DynamicModuleLoader>
        </Page>
        
    );
};
