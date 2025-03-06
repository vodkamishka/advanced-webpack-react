import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlePageFilters.module.scss';
import { Input } from 'shared/ui/Input';
import { ArticleSortSelector } from 'entities/Article/ui/ArticleSortSelector/ArticleSortSelector';
import { ArticleViewSelector } from 'entities/Article/ui/ArticleViewSelector';
import { useSelector } from 'react-redux';
import {
    getArticlePageOrder, getArticlePageSearch,
    getArticlePageSort,
    getArticlePageView,
    getArticlePageType
} from 'pages/ArticlePage/model/selectors/getArticlePageView';
import { useCallback } from 'react';
import { ArticleType, ArticleView } from 'entities/Article';
import { setOrder, setPage, setSearch, setSort, setType, setView } from '../../model/slice/articlePageSlice';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { Card } from 'shared/ui/Card/Card';
import { ArticleSortField } from 'entities/Article/model/types/articleTypes';
import { SortOrder } from 'shared/types/types';
import { fetchArticleList } from 'pages/ArticlePage/model/services/fetchArticleList/fetchArticleList';
import { ArticleTypeTabs } from 'entities/Article/ui/ArticleTypeTabs/ArticleTypeTabs';
import { useDebounce } from 'shared/hooks/useDebounce';

interface ArticlePageFiltersProps {
    className?: string
}

export const ArticlePageFilters = ({ className }: ArticlePageFiltersProps) => {
    
    const dispatch = useAppDispatch();
    
    const sort = useSelector(getArticlePageSort);
    const order = useSelector(getArticlePageOrder);
    const search = useSelector(getArticlePageSearch);

    const view = useSelector(getArticlePageView);
    const type = useSelector(getArticlePageType);
    
    const fetchData = useCallback(() => {
        dispatch(fetchArticleList({ replace: true }));
    }, [dispatch]);
    
    const fetchDataDebounce = useDebounce(fetchData, 1000);
    
    const onChangeView = useCallback((value: ArticleView) => {
        dispatch(setView(value));
        dispatch(setPage(1));
        fetchDataDebounce();
    }, [dispatch, fetchDataDebounce])
    
    const onChangeSort = useCallback((value: ArticleSortField) => {
        dispatch(setSort(value));
        dispatch(setPage(1));
        fetchDataDebounce();
    }, [dispatch, fetchDataDebounce])

    const onChangeOrder = useCallback((value: SortOrder) => {
        dispatch(setOrder(value));
        dispatch(setPage(1));
        fetchDataDebounce();
    }, [dispatch, fetchDataDebounce])

    const onChangeSearch = useCallback((value: string) => {
        dispatch(setSearch(value));
        dispatch(setPage(1));
        fetchDataDebounce();
    }, [dispatch, fetchDataDebounce])

    const onChangeType = useCallback((value: ArticleType) => {
        dispatch(setType(value));
        dispatch(setPage(1));
        fetchDataDebounce();
    }, [dispatch, fetchDataDebounce]);
    

    return (
        <div className={classNames('', {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    onChangeSort={onChangeSort}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    order={order}
                />
                <ArticleViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
            </div>
            <Card className={cls.search}>
                <Input 
                    onChange={onChangeSearch}
                    placeholder={'Поиск'} 
                    value={search}
                />
            </Card>
            <ArticleTypeTabs
                value={type}
                onChangeType={onChangeType}
                className={cls.tabs}
            />
        </div>
    );
};
