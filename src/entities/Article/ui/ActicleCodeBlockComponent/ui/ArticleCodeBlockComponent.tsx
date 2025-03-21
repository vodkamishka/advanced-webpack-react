import { ArticleCodeBlock } from '../../../model/types/articleTypes';

import cls from './ArticleCodeBlockComponent.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Code } from '@/shared/ui/Code';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = ({
    className,
    block,
}: ArticleCodeBlockComponentProps) => {
    return (
        <div
            className={classNames(cls.articleCodeBlockComponent, {}, [
                className,
            ])}
        >
            <Code text={block.code} />
        </div>
    );
};
