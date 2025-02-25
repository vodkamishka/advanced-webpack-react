import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleDetailsPageProps {
    className?: string
}

export const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
 
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames('', {}, [className])}>
            Article details page
        </div>
    );
};
