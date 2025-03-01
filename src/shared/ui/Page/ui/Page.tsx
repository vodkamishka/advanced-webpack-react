import { FC, ReactNode, RefObject } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';


interface PageProps {
    className?: string;
    children?: ReactNode;
    innerRef?: RefObject<HTMLDivElement>
}

export const Page: FC<PageProps> = ({ className, children }: PageProps) => {
    return (
        <section  className={classNames(cls.page, {}, [className])}>
            { children }
        </section>
    );
};
