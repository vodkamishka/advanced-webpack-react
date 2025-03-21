import React, { ChangeEvent } from 'react';

import cls from './Select.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface IOptions {
    value: string;
    content: string;
}
interface SelectProps {
    className?: string;
    options?: IOptions[];
    label?: string;
    onChange?: (value: string) => void;
    value?: string;
    disabled?: boolean;
}

export interface SelectOption {
    value: string;
    content: string;
}

export const Select = ({
    className,
    options,
    label,
    onChange,
    value,
    disabled,
}: SelectProps) => {
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.select, {}, [className])}>
            {label && <div>{label}</div>}
            <select
                onChange={onChangeHandler}
                value={value}
                disabled={disabled}
            >
                {options?.map(({ value, content }) => (
                    <option key={value} value={value}>
                        {content}
                    </option>
                ))}
            </select>
        </div>
    );
};
