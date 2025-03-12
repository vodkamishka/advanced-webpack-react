import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';
import { getAuthData, isAdmin, isManager, logout } from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/ui/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();
    const authData = useSelector(getAuthData);
    const dispatch = useDispatch();

    const isAdminRole = useSelector(isAdmin);
    const isManagerRole = useSelector(isManager);

    const [isOpen, setIsOpen] = useState(false);

    const openModal = useCallback(() => setIsOpen(true), []);

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
                onClick={openModal}
            >
                {t('Войти')}
            </Button>
            {isOpen && (
                <LoginModal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    lazy={true}
                />
            )}
        </header>
    );
});

