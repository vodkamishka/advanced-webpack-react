import { memo } from 'react';

import { ArticleImageBlock } from '../../../model/types/articleTypes';

import cls from './ArticleImageBlockComponent.module.scss';

import { Text, TextAlign } from '@/shared/ui/Text/ui/Text';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ArticleImageBcxlokComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
    function ArticleImageBlockComponent({
        className,
        block,
    }: ArticleImageBcxlokComponentProps) {
        return (
            <div className={classNames('', {}, [className])}>
                <img src={block.src} alt={block.title} className={cls.img} />
                {block.title && (
                    <Text text={block.title} align={TextAlign.CENTER} />
                )}
            </div>
        );
    },
);
