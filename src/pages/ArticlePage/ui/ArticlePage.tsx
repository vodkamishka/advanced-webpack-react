import { classNames } from 'shared/lib/classNames/classNames';

interface ArticlePageProps {
    className?: string
}

export const ArticlePage = ({ className }: ArticlePageProps) => {
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames('', {}, [className])}>
            Article Page
        </div>
    );
};
