import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from '../../../entities/Article';
import { useParams } from 'react-router-dom';

interface ArticleDetailsPageProps {
    className?: string
}

export const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {

    const { id } = useParams<{ id: string }>();
 
    return (
         
        <div className={classNames('', {}, [className])}>
            <ArticleDetails id={id}/>
        </div>
    );
};
