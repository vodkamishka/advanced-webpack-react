import { HTMLAttributeAnchorTarget, memo } from 'react';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/articleTypes';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleListProps {
    className?: string;
    articles: Article[]
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleList = memo(function ArticleList (props: ArticleListProps) {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        target,
    } = props;


    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
            target={target}
        />
    );

    return (
        <div className={classNames('', {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
        </div>
    );
});
