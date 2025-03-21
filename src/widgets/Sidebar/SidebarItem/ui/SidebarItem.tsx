import { useTranslation } from 'react-i18next';
import { memo } from 'react';

import { SidebarItemType } from '../../Sidebar/model/types/types';

import cls from './SidebarItem.module.scss';

import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { classNames } from '@/shared/lib/classNames/classNames';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(function SidebarItem({
    item,
    collapsed,
}: SidebarItemProps) {
    const { t } = useTranslation();
    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});
