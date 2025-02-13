import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal'
import { LoginForm } from '../LoginForm/';
import { Suspense } from 'react';

interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    setIsOpen?: (isOpen: boolean) => void;
    lazy?: boolean;
}

export const LoginModal = ({ className, isOpen, setIsOpen, lazy }: LoginModalProps) => {
    return (
        <Modal 
            className={classNames('', {}, [className])} 
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            lazy={lazy}
        >
            <Suspense>
                <LoginForm setIsOpen={setIsOpen}/>
            </Suspense>
        </Modal>
    );
};
