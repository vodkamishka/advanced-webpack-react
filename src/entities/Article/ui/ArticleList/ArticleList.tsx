import { CSSProperties, HTMLAttributeAnchorTarget, memo } from 'react';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article, ArticleView } from '../../model/types/articleTypes';

import cls from './ArticleList.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleList = memo(function ArticleList(props: ArticleListProps) {
    const { className, articles, view = ArticleView.SMALL, target } = props;

    const renderArticle = ({
        index,
        style,
    }: {
        index: number;
        style: CSSProperties;
    }) => {
        const article = articles[index];

        return (
            <div style={style}>
                <ArticleListItem
                    article={article}
                    view={view}
                    className={cls.card}
                    key={article.id}
                    target={target}
                />
            </div>
        );
    };

    return (
        <div
            className={classNames(cls.articleList, {}, [className, cls[view]])}
            data-testid="ArticleList"
        >
            <AutoSizer>
                {({ height, width }: { height: number; width: number }) => {
                    return (
                        <List
                            height={height}
                            itemCount={articles.length}
                            itemSize={667}
                            width={width}
                        >
                            {renderArticle}
                        </List>
                    );
                }}
            </AutoSizer>
        </div>
    );
});
