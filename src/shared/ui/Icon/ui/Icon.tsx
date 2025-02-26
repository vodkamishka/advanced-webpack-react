import { FC, SVGProps } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';


interface IconProps {
    className?: string;
    Svg: FC<SVGProps<SVGElement>>;
}

export const Icon = ({ className, Svg }: IconProps) => {
    return (
        <Svg className={classNames(cls.icon, {}, [className])} />
    );
};
