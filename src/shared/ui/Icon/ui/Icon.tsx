import { FC, SVGProps } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';


interface IconProps extends SVGProps<SVGElement> {
    className?: string;
    Svg: FC<SVGProps<SVGElement>>;
    inverted?: boolean;
}

export const Icon = ({ className, Svg, inverted, ...otherProps }: IconProps) => {
    return (
        <Svg
            className={classNames(inverted ? cls.inverted : cls.icon, {}, [className])}
            {...otherProps}
        />
    );
};
