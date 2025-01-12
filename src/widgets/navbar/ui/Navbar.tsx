import React from 'react';

import * as cls from './Navbar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/ui/AppLink";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const { t, i18n } = useTranslation();
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
                    {t("Главная")}
                </AppLink>
                <AppLink theme={AppLinkTheme.RED} to={'/about'}>
                    {t("О сайте")}
                </AppLink>
            </div>
        </div>
    );
};
