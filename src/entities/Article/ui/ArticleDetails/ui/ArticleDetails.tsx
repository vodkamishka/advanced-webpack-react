import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { articleReducer } from '../../../model/slice/articleSlice';
import { fetchArticleById } from '../../../model/servises/fetchArticleById';
import { getArticleData, getArticleError, getArticleIsLoading } from '../../../model/selectors/getArticleData';
import { ArticleBlock, ArticleBlockType } from '../../../model/types/articleTypes';
import { ArticleCodeBlockComponent } from '../../ActicleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../../ActicleImageBlockComponent';
import { ArticleTextBlockComponent } from '../../ActicleTextBlockComponent';

import cls from './ArticleDetails.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { Text } from '@/shared/ui/Text';
import { TextSize, TextTheme } from '@/shared/ui/Text/ui/Text';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import { Icon } from '@/shared/ui/Icon';
import { Avatar } from '@/shared/ui/Avatar';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers = {
    articleDetails: articleReducer,
};

export const ArticleDetails = ({ className, id }: ArticleDetailsProps) => {
    
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleIsLoading);
    const article = useSelector(getArticleData);
    const error = useSelector(getArticleError);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );
        default:
            return null;
        }
    }, []);
    
    useEffect(() => {
        dispatch(fetchArticleById(id))
    }, [dispatch, id])

    let content;

    if (isLoading) {
        content = <div>Loading...</div>
    } else if (error) {
        content = <Text theme={TextTheme.ERROR} title={error}/>
    } else {

        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={cls.avatar}
                    />
                </div>
                <Text
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <div className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={EyeIcon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={CalendarIcon} />
                    <Text text={article?.createdAt} />
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader asyncReducers={reducers} removeAfterUnmount>
            <div
                className={classNames('', {}, [className])}
                data-testid="ArticleDetails.Info"
            >
                {content}
            </div>
        </DynamicModuleLoader>
    );
};
