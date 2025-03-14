import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Drawer.module.scss';
import { Overlay } from 'shared/ui/Overlay/Overlay';
import { Portal } from 'shared/ui/Portal';
import { ReactNode } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { useModal } from 'shared/hooks/useModal';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Drawer = ({ className, children, onClose, isOpen, lazy }: DrawerProps) => {

    const { theme } = useTheme();

    const {
        close,
        isClosing,
        isMounted,
    } = useModal({
        animationDelay: 300,
        onClose,
        isOpen,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close} />
                <div
                    className={cls.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};
