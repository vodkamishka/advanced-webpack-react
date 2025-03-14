import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/Modal'
import { LoginForm } from '../LoginForm/';
import { Suspense } from 'react';

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
