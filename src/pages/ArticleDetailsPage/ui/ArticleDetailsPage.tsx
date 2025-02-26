import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from '../../../entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text';
import { CommentList } from '../../../entities/Comment';
import { useSelector } from 'react-redux';
import {
    getArticleDetailsCommentsError,
    getArticleDetailsCommentsIsLoading
} from '../models/selectors/getArticleDetailsComments';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import {
    fetchCommentsByArticleId
} from 'pages/ArticleDetailsPage/models/services/fetchCommentsByAtricleId/fetchCommentsByArticleId';
import {
    articleDetailsCommentsReducer,
    getArticleDetailsCommentsSelectors
} from '../models/slice/articleDetailsPageSlice';

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};


export const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {

    const { id } = useParams<{ id: string }>();
    
    const error = useSelector(getArticleDetailsCommentsError);
    const isLoading = useSelector(getArticleDetailsCommentsIsLoading);

    const comments = useSelector(getArticleDetailsCommentsSelectors.selectAll);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
    }, [dispatch, id]);

    if (!id) {
        return (
            // eslint-disable-next-line i18next/no-literal-string
            <div className={classNames('', {}, [className])}>
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

        <DynamicModuleLoader asyncReducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ArticleDetails id={id}/>
                <Text title={'Коммментарии'}/>
                <CommentList
                    isLoading={isLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    );
};
