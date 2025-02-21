import cls from './Text.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

export const Text = memo(function Text (props: TextProps) {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align,
    } = props;

    const mods = {
        [cls[theme]]: theme,
        [cls[align]]: align,
    }

    return (
        <div className={classNames(cls.text, mods, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
