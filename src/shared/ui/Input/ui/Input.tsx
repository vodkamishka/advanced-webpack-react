import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import React, { InputHTMLAttributes, memo } from 'react';


interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    type?: string;
    placeholder?: string;
}

export const Input = memo(function Input (
    { 
        className, 
        type = 'string' ,
        onChange,
        placeholder,
        value = '',
        ...otherProps
    }: InputProps) {

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }

    return (
        <input
            className={classNames(cls.input, {}, [className])}
            type={type}
            value={value}
            onChange = {onChangeHandler}
            placeholder={placeholder}
            {...otherProps}
        >

        </input>
    );
});
