import { ArticleList } from '../../../../entities/Article/ui/ArticleList/ArticleList';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { articlePageReducer, getArticlePageSelectors } from '../../model/slice/articlePageSlice';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getArticleIsLoading } from '../../../../entities/Article/model/selectors/getArticleData';
import { getArticlePageHasMore, getArticlePageView } from '../../model/selectors/getArticlePageView';
import { Page } from 'shared/ui/Page/ui/Page';
import { fetchNextArticlePage } from 'pages/ArticlePage/model/services/fetchNextArticlePage/fetchNextArticlePage';
import { initArticlePage } from '../../model/services/initArticlePage/initArticlePage';
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters';
import { useSearchParams } from 'react-router-dom';

const reducers = {
    articlePage: articlePageReducer,
};

export const ArticlePage = memo(function ArticlePage() {

    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticleIsLoading);

    const view = useSelector(getArticlePageView);

    const hasMore = useSelector(getArticlePageHasMore);

    const articles = useSelector(getArticlePageSelectors.selectAll);

    const [searchParams] = useSearchParams();

    const callback = useCallback(() => {
        dispatch(fetchNextArticlePage())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [articles, hasMore])

    useEffect(() => {
        dispatch(initArticlePage(searchParams));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
         
        <Page callback={callback} disableScroll={true}>
            <DynamicModuleLoader asyncReducers={reducers}>
                {/*<ArticlePageFilters />*/}
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </DynamicModuleLoader>
        </Page>
    );
});

