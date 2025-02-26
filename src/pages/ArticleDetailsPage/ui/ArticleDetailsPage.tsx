import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from '../../../entities/Article';
import { useParams } from 'react-router-dom';

interface ArticleDetailsPageProps {
    className?: string
}

export const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {

    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            // eslint-disable-next-line i18next/no-literal-string
            <div className={classNames('', {}, [className])}>
                &#39;Статья не найдена&#39;
            </div>
        );
    }
 
    return (
         
        <div className={classNames('', {}, [className])}>
            <ArticleDetails id={id}/>
        </div>
    );
};
