import cls from "./Modal.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import React, { ReactNode, useCallback } from "react";
import { Portal } from "shared/ui/Portal";

interface ModalProps {
    className?: string;
    isOpen: boolean;
    children?: never | string | ReactNode;
    setIsOpen?: (isOpen: boolean) => void;
}

export const Modal = ({ className, isOpen, children, setIsOpen }: ModalProps) => {
    
    const mods = {
        [cls.isOpen]: isOpen
    }
    
    const closeModal = useCallback(() => setIsOpen(false), [setIsOpen]);
    const clickContent = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);
    
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
