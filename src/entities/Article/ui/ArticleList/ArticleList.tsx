import { CSSProperties, HTMLAttributeAnchorTarget, memo } from 'react';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/articleTypes';
import { classNames } from 'shared/lib/classNames/classNames';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

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


    const renderArticle = ({ index, style }: {index: number; style: CSSProperties}) => {

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

        )
    }

    return (
        <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
            <AutoSizer>
                {({ height, width }: {height: number, width: number}) => {
                    return (
                        <List
                            height={height}
                            itemCount={articles.length}
                            itemSize={667}
                            width={width}
                        >
                            {renderArticle}
                        </List>
                    )
                }}
            </AutoSizer>
        </div>
    );
});
