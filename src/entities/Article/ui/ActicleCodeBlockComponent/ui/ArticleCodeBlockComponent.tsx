import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleCodeBlockComponentProps {
    className?: string
}

export const ArticleCodeBlockComponent = ({ className }: ArticleCodeBlockComponentProps) => {
   
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames('', {}, [className])}>
            ArticleCodeBlockComponent
        </div>
    );
};
