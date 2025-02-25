import { classNames } from 'shared/lib/classNames/classNames';


interface ArticleImageBcxlokComponentProps {
    className?: string
}

export const ArticleImageBlockComponent = ({ className }: ArticleImageBcxlokComponentProps) => {
   
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames('', {}, [className])}>
            ArticleImageBlockComponent
        </div>
    );
};
