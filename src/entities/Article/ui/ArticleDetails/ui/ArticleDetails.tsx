import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleReducer } from '../../../model/slice/articleSlice';
import { fetchArticleById } from '../../../model/servises/fetchArticleById';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useEffect } from 'react';
import { getArticleError, getArticleIsLoading } from '../../../model/selectors/getArticleData';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers = {
    profile: articleReducer,
};

export const ArticleDetails = ({ className, id }: ArticleDetailsProps) => {
    
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleIsLoading);
    const error = useSelector(getArticleError);
    
    useEffect(() => {
        dispatch(fetchArticleById(id))
    }, [dispatch, id])

    let content;

    if (isLoading) {
        content = <div>Loading...</div>
    } else if (error) {
        content = <Text theme={TextTheme.ERROR} title={error}/>
    } else {
        // eslint-disable-next-line i18next/no-literal-string
        content = <div>Article Details</div>
    }

    return (
        <DynamicModuleLoader asyncReducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
};
