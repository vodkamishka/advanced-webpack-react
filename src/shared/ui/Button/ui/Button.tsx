import { ButtonHTMLAttributes, FC, memo } from 'react';

import cls from './Button.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    OUTLINE_RED = 'outline_red',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    fullWidth?: boolean;
}

export const Button: FC<ButtonProps> = memo(function Button (props) {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        square,
        size = ButtonSize.M,
        fullWidth,
        ...otherProps
    } = props;


    const mods: Record<string, boolean | undefined> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.fullWidth]: fullWidth,
    };

    return (
        <button
            className={classNames(cls.Button, mods, [className])}
            {...otherProps}
            type="button"
        >
            {children}
        </button>
    );
});
