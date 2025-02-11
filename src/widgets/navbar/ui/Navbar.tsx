import { useCallback, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { logout } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthData } from 'entities/User/model/selectors/getAuthData/getAuthData';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const authData = useSelector(getAuthData);

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);

    const onLogout = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.navbar, {}, [className])}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </Button>
            </div>
        );
    }

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
