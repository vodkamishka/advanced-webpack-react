import { classNames } from 'shared/lib/classNames/classNames';


interface ArticleTextBlockComponentProps {
    className?: string
}

export const ArticleTextBlockComponent = ({ className }: ArticleTextBlockComponentProps) => {

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames('', {}, [className])}>
            ArticleTextBlockComponent
        </div>
    );
};
