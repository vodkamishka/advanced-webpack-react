import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { articlePageReducer } from '../../model/slice/articlePageSlice';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { memo, useCallback, useEffect } from 'react';
import { Page } from 'shared/ui/Page/ui/Page';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { initArticlePage } from '../../model/services/initArticlePage/initArticlePage';
import { useSearchParams } from 'react-router-dom';
import { ArticleInfiniteList } from '../../ui/ArticleInfifniteList/ArticleInfiniteList';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './ArticlePage.module.scss';

const reducers = {
    articlePage: articlePageReducer,
};

const ArticlePage = memo(function ArticlePage() {

    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams();

    const callback = useCallback(() => {
        dispatch(fetchNextArticlePage())
    }, [dispatch])

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
                <ArticleInfiniteList className={cls.list} />
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticlePage;

