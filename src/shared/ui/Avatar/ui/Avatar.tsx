import { classNames } from 'shared/lib/classNames/classNames';
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
    
    const style = {
        width: size,
        height: size
    }
    
    return (
        <img
            className={classNames('', {}, [className])}
            src={src}
            alt={alt}
            style={style}
        />
    );
};
