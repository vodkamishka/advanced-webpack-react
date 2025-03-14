import { FC, SVGProps } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';


interface IconProps {
    className?: string;
    Svg: FC<SVGProps<SVGElement>>;
    inverted?: boolean;
}

export const Icon = ({ className, Svg, inverted }: IconProps) => {
    return (
        <Svg className={classNames(inverted ? cls.inverted : cls.icon, {}, [className])} />
    );
};
