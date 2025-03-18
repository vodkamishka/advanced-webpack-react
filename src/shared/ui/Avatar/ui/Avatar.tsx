import { useMemo } from 'react';

import UserIcon from '../../../assets/icons/user-filled.svg';

import cls from './Avatar.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage';
import { Icon } from '@/shared/ui/Icon';



interface AvatarProps {
    className?: string
    src?: string;
    alt?: string;
    size?: number;
    fallbackInverted?: boolean;
}

export const Avatar = ({ 
    className, 
    src, 
    alt = 'picture',
    size = 100,
    fallbackInverted,
}: AvatarProps) => {
    
    const style = useMemo(() => ({
        width: size,
        height: size
    }), [size])

    const fallback = <div>Loading...</div>;
    const errorFallback = <Icon inverted={fallbackInverted} width={size} height={size} Svg={UserIcon} />;
    
    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            alt={alt}
            style={style}
            className={classNames(cls.avatar, {}, [className])}
        />
    );
};
