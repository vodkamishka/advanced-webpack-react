import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import React, { InputHTMLAttributes, memo } from 'react';


interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'> {
    className?: string;
    value?: string | number;
    onChange?: (value: string | number) => void;
    type?: string;
    placeholder?: string;
    readonly?: boolean;
}

export const Input = memo(function Input (
    { 
        className, 
        type = 'string' ,
        onChange,
        placeholder,
        value = '',
        readonly,
        ...otherProps
    }: InputProps) {

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }

    const mods = {
        [cls.readonly]: readonly
    }

    return (
        <input
            className={classNames(cls.input, mods, [className])}
            type={type}
            value={value}
            onChange = {onChangeHandler}
            placeholder={placeholder}
            readOnly={readonly}
            {...otherProps}
        >

        </input>
    );
});
