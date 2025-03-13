import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

export const Overlay = ({ className, onClick }: OverlayProps) => {
    return (
        <div onClick={onClick} className={classNames(cls.overlay, {}, [className])}/>
    )
};
