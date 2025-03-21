import { memo } from 'react';

import cls from './Text.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
}

export enum TextAlign {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center',
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

export const Text = memo(function Text(props: TextProps) {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align,
        size = TextSize.M,
    } = props;

    const mods = {
        [cls[theme]]: theme,
        [cls[align]]: align,
        [cls[size]]: size,
    };

    return (
        <div className={classNames(cls.text, mods, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
