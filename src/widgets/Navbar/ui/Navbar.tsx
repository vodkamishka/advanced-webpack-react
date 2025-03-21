import { useTranslation } from 'react-i18next';
import React, { memo, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import cls from './Navbar.module.scss';

import { LoginModal } from '@/features/AuthByUsername';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getAuthData, isAdmin, isManager, logout } from '@/entities/User';
import { Text, TextTheme } from '@/shared/ui/Text/ui/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { NotificationButton } from '@/features/NotificationButton';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();
    const authData = useSelector(getAuthData);
    const dispatch = useDispatch();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const isAdminRole = useSelector(isAdmin);
    const isManagerRole = useSelector(isManager);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdminRole || isManagerRole;

    if (authData) {
        return (
            <header className={classNames(cls.navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title={t('Ulbi TV App')}
                    theme={TextTheme.INVERTED}
                />
                {isAdminPanelAvailable && (
                    <AppLink
                        to={RoutePath.admin_panel}
                        theme={AppLinkTheme.SECONDARY}
                    >
                        {t('Админка')}
                    </AppLink>
                )}
                <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.createBtn}
                >
                    {t('Создать статью')}
                </AppLink>
                <div className={cls.buttons}>
                    <NotificationButton />
                    <AvatarDropdown />
                </div>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </Button>
            </header>
        );
    }

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </header>
    );
});
