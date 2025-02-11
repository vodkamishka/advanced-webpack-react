import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import cls from './Sidebar.module.scss';
import { SidebarItemList, SidebarItemType } from 'widgets/Sidebar/SidebarItem/model/types/types';
import { SidebarItem } from '../../SidebarItem';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo( function Sidebar ({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = useCallback(() => {
        setCollapsed((prev) => !prev);
    }, []);

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
                {SidebarItemList.map((item: SidebarItemType) => (
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
