import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList } from '../../../entities/Article/ui/ArticleList/ArticleList';
import { ArticleView } from '../../../entities/Article/model/types/articleTypes';

interface ArticlePageProps {
    className?: string
}

export const ArticlePage = ({ className }: ArticlePageProps) => {
    return (
         
        <div className={classNames('', {}, [className])}>
            <ArticleList
                isLoading
                view={ArticleView.BIG}
                articles={[]}
            />
        </div>
    );
};
