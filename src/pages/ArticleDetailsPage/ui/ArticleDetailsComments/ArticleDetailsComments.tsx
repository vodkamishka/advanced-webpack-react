import { Text } from 'shared/ui/Text';
import AddCommentForm from 'features/AddCommentForm/ui/AddCommentForm';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { getArticleDetailsCommentsIsLoading } from '../../models/selectors/getArticleDetailsComments';
import { getArticleDetailsCommentsSelectors } from '../../models/slice/articleDetailsCommentsSlice';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { getAddCommentFormText } from 'features/AddCommentForm/model/selectors/getAddCommentFormText';
import { useCallback, useEffect } from 'react';
import { addCommentForArticle } from '../../models/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../models/services/fetchCommentsByAtricleId/fetchCommentsByArticleId';


interface ArticleDetailsCommentsProps {
    className?: string;
    id: string;
}

export const ArticleDetailsComments = ({ id }: ArticleDetailsCommentsProps) => {

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

    return (
        <>
            <Text title={'Коммментарии'}/>
            <AddCommentForm onSendComment={onSendComment}/>
            <CommentList
                isLoading={isLoading}
                comments={comments}
            />
        </>
    );
};
