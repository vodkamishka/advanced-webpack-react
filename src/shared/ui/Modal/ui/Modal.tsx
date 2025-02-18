import cls from './Modal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import { Portal } from 'shared/ui/Portal';

interface ModalProps {
    className?: string;
    isOpen?: boolean;
    children?: never | string | ReactNode;
    setIsOpen?: (isOpen: boolean) => void
    lazy?: boolean;
}

export const Modal = ({ className, isOpen, children, setIsOpen, lazy }: ModalProps) => {
    
    const mods = {
        [cls.isOpen]: isOpen
    }
    
    const closeModal = useCallback(() => setIsOpen?.(false), [setIsOpen]);
    const clickContent = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);
    
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen])

    if (!isMounted && lazy) {
        return null;
    }
    
    return (
        <Portal>
            <div
                className={classNames(cls.modal, mods, [className])}
                onClick={closeModal}
            >
                <div
                    className={cls.content}
                    onClick={clickContent}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};
