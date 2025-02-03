import { useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={openModal}
            >
                {t('Войти')}
            </Button>
            <LoginModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                lazy={true}
            />
        </div>
    );
};
