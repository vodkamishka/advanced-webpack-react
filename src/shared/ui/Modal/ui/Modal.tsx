import cls from './Modal.module.scss';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import React, { ReactNode } from 'react';
import { Portal } from '@/shared/ui/Portal';
import { useTheme } from '@/app/providers/ThemeProvider';
import { useModal } from '@/shared/hooks/useModal';
import { Overlay } from '@/shared/ui/Overlay/Overlay';

interface ModalProps {
    className?: string;
    isOpen?: boolean;
    children?: never | string | ReactNode;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = ({ className, isOpen, children, onClose, lazy }: ModalProps) => {

    const {
        close,
        isClosing,
        isMounted,
    } = useModal({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen,
    });


    const { theme } = useTheme();

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }
    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className, theme, 'app_modal'])}>
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
