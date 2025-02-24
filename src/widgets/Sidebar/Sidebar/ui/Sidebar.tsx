import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import cls from './Sidebar.module.scss';
import { SidebarItemList, SidebarItemType } from '../../SidebarItem/model/types/types';
import { SidebarItem } from '../../SidebarItem';
import { useSelector } from 'react-redux';
import { getAuthData } from '../../../../entities/User';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo( function Sidebar ({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);

    const authData = useSelector(getAuthData);

    const onToggle = useCallback(() => {
        setCollapsed((prev) => !prev);
    }, []);

    const protectedSidebarItemList = useMemo(() => {
        return SidebarItemList.filter(({ withAuth }) => !(!authData && withAuth));
    }, [authData])

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                {protectedSidebarItemList?.map((item: SidebarItemType) => (
                    <SidebarItem
                        item={item}
                        key={item.path}
                        collapsed={collapsed}
                    />
                ))}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    short={collapsed}
                    className={cls.lang}
                />
            </div>
        </div>
    );
});
