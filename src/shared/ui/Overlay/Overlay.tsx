import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

export const Overlay = ({ className, onClick }: OverlayProps) => {
    const { t } = useTranslation();
    return (
        <div onClick={onClick} className={classNames(cls.overlay, {}, [className])}/>
    )
};
