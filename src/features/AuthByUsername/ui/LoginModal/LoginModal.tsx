import { Suspense } from 'react';

import { LoginForm } from '../LoginForm/';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/Modal'

interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    return (
        <Modal 
            className={classNames('', {}, [className])} 
            isOpen={isOpen}
            onClose={onClose}
            lazy={true}
        >
            <Suspense>
                <LoginForm setIsOpen={onClose}/>
            </Suspense>
        </Modal>
    );
};
