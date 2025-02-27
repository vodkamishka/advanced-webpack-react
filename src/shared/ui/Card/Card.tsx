import { HTMLAttributes, memo, ReactNode } from 'react';
import cls from './Card.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
}

export const Card = memo(function Card(props: CardProps) {
    const { className, children, ...otherProps } = props;

    return (
        <div
            className={classNames(cls.card, {}, [className])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
