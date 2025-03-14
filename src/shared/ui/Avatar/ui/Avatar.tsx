import { classNames } from '@/shared/lib/classNames/classNames';
import { useMemo } from 'react';
interface AvatarProps {
    className?: string
    src?: string;
    alt?: string;
    size?: number
}

export const Avatar = ({ 
    className, 
    src, 
    alt = 'picture',
    size = 100
}: AvatarProps) => {
    
    const style = useMemo(() => ({
        width: size,
        height: size
    }), [size])
    
    return (
        <img
            className={classNames('', {}, [className])}
            src={src}
            alt={alt}
            style={style}
        />
    );
};
