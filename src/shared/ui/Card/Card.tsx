import { HTMLAttributes, memo, ReactNode } from 'react';
import cls from './Card.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
}

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

export const Card = memo(function Card(props: CardProps) {
    const {
        className,
        children,
        theme = CardTheme.NORMAL,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(cls.card, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
