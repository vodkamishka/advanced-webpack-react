import { ArticleList } from '../../../entities/Article/ui/ArticleList/ArticleList';
import { ArticleView } from '../../../entities/Article/model/types/articleTypes';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { articlePageReducer, getArticlePageSelectors, setView } from '../model/slice/articlePageSlice';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getArticleIsLoading } from '../../../entities/Article/model/selectors/getArticleData';
import { ArticleViewSelector } from '../../../entities/Article/ui/ArticleViewSelector/ui/AtricleViewSelector';
import { getArticlePageHasMore, getArticlePageView } from '../model/selectors/getArticlePageView';
import { Page } from 'shared/ui/Page/ui/Page';
import { fetchNextArticlePage } from 'pages/ArticlePage/model/services/fetchNextArticlePage/fetchNextArticlePage';
import { initArticlePage } from '../model/services/initArticlePage/initArticlePage';

interface ArticlePageProps {
    className?: string
}

const reducers = {
    articlePage: articlePageReducer,
};

export const ArticlePage = memo(function ArticlePage({ className }: ArticlePageProps) {

    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticleIsLoading);

    const view = useSelector(getArticlePageView);

    const hasMore = useSelector(getArticlePageHasMore);

    const articles = useSelector(getArticlePageSelectors.selectAll);

    const callback = useCallback(() => {
        dispatch(fetchNextArticlePage())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [articles, hasMore])

    useEffect(() => {
        dispatch(initArticlePage());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onChangeView = useCallback((value: ArticleView) => {
        dispatch(setView(value));
    }, [dispatch])

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
         
        <Page callback={callback}>
            <DynamicModuleLoader asyncReducers={reducers}>
                <ArticleViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </DynamicModuleLoader>
        </Page>
    );
});

