import { Comment } from '../../../model/types/commentTypes';
import { CommentCard } from '../../CommentCard';

import cls from './CommentList.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface CommentListProps {
    className?: string
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = (
    { 
        className, 
        comments, 
        isLoading,
    }: CommentListProps) => {

    if (!comments?.length) {
        // eslint-disable-next-line i18next/no-literal-string
        return <div>Comments not yet</div>
    }


    return (
        <div className={classNames('', {}, [className])}>
            {comments.map(comment => (
                <CommentCard 
                    comment={comment}
                    isLoading={isLoading}
                    key={comment.id}
                    className={cls.comment}
                />
            ))}
        </div>
    );
};
