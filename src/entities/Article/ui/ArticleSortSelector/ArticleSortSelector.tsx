import { useMemo } from 'react';

import { ArticleSortField } from '../../model/types/articleTypes';

import cls from './ArticleSortSelector.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/Select';
import { SortOrder } from '@/shared/types/types';

interface ArticleSortSelectorProps {
    className?: string;
    onChangeSort: (value: ArticleSortField) => void;
    sort: ArticleSortField;
    onChangeOrder: (value: SortOrder) => void;
    order: SortOrder;
}

export const ArticleSortSelector = ({
    className,
    onChangeSort,
    sort,
    onChangeOrder,
    order,
}: ArticleSortSelectorProps) => {
    const orderOptions = useMemo<SelectOption[]>(
        () => [
            {
                value: 'asc',
                content: 'возрастание',
            },
            {
                value: 'desc',
                content: 'убывание',
            },
        ],
        [],
    );

    const sortFieldOptions = useMemo<SelectOption[]>(
        () => [
            {
                value: ArticleSortField.CREATED_AT,
                content: 'дате создания',
            },
            {
                value: ArticleSortField.TITLE,
                content: 'названию',
            },
            {
                value: ArticleSortField.VIEWS,
                content: 'просмотрам',
            },
        ],
        [],
    );

    return (
        <div className={classNames(cls.articleSortSelector, {}, [className])}>
            <Select
                options={orderOptions}
                label="ордер"
                className={cls.order}
                onChange={onChangeSort}
                value={sort}
            />
            <Select
                options={sortFieldOptions}
                label="сорт"
                onChange={onChangeOrder}
                value={order}
            />
        </div>
    );
};
