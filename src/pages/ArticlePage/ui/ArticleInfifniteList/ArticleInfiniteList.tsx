import { ArticleList } from '@/entities/Article/ui/ArticleList/ArticleList';
import { useSelector } from 'react-redux';
import { getArticleIsLoading } from '@/entities/Article/model/selectors/getArticleData';
import { getArticlePageView } from '../..//model/selectors/getArticlePageView';
import { getArticlePageSelectors } from '../..//model/slice/articlePageSlice';

interface ArticleInfiniteListProps {
    className?: string
}

export const ArticleInfiniteList = ({ className }: ArticleInfiniteListProps) => {
    const isLoading = useSelector(getArticleIsLoading);
    const view = useSelector(getArticlePageView);

    const articles = useSelector(getArticlePageSelectors.selectAll);
    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
        />
    );
};
