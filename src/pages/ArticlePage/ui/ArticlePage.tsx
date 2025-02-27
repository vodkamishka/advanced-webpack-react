import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList } from '../../../entities/Article/ui/ArticleList/ArticleList';
import { ArticleView } from '../../../entities/Article/model/types/articleTypes';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { articlePageReducer, getArticlePageSelectors, initState, setView } from '../model/slice/articlePageSlice';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useCallback, useEffect } from 'react';
import { fetchArticleList } from 'pages/ArticlePage/model/services/fetchArticleList/fetchArticleList';
import { useSelector } from 'react-redux';
import { getArticleIsLoading } from '../../../entities/Article/model/selectors/getArticleData';
import { ArticleViewSelector } from '../../../entities/Article/ui/ArticleViewSelector/ui/AtricleViewSelector';
import { getArticlePageView } from 'pages/ArticlePage/model/selectors/getArticlePageView';

interface ArticlePageProps {
    className?: string
}

const reducers = {
    articlePage: articlePageReducer,
};

export const ArticlePage = ({ className }: ArticlePageProps) => {

    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticleIsLoading);

    const view = useSelector(getArticlePageView);

    const articles = useSelector(getArticlePageSelectors.selectAll);

    useEffect(() => {
        dispatch(fetchArticleList());
        dispatch(initState());
    }, [dispatch]);

    const onChangeView = useCallback((value: ArticleView) => {
        dispatch(setView(value));
    }, [dispatch])

    return (
         
        <div className={classNames('', {}, [className])}>
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
            
        </div>
    );
};
