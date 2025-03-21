import { memo, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { articlePageReducer } from '../../model/slice/articlePageSlice';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { initArticlePage } from '../../model/services/initArticlePage/initArticlePage';
import { ArticleInfiniteList } from '../../ui/ArticleInfifniteList/ArticleInfiniteList';

import cls from './ArticlePage.module.scss';

import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { Page } from '@/shared/ui/Page/ui/Page';
import { classNames } from '@/shared/lib/classNames/classNames';

const reducers = {
    articlePage: articlePageReducer,
};

const ArticlePage = memo(function ArticlePage() {
    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams();

    const callback = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    useEffect(() => {
        dispatch(initArticlePage(searchParams));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <DynamicModuleLoader asyncReducers={reducers}>
            <Page
                callback={callback}
                disableScroll={true}
                className={classNames(cls.articlesPage, {}, [])}
            >
                {/*<ArticlePageFilters />*/}
                <div data-testid="ArticlesPage"></div>
                <ArticleInfiniteList className={cls.list} />
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticlePage;
