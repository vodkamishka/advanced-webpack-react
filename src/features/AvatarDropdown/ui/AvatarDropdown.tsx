import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { getAuthData, isAdmin, isManager, logout } from '@/entities/User';
import { Dropdown } from '@/shared/ui/Popups';
import { Avatar } from '@/shared/ui/Avatar';

interface AvatarDropdownProps {
    className?: string
}

export const AvatarDropdown = ({ className }: AvatarDropdownProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isAdminRole = useSelector(isAdmin);
    const isManagerRole = useSelector(isManager);
    const authData = useSelector(getAuthData);

    const onLogout = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdminRole || isManagerRole;

    if (!authData) {
        return null;
    }
    return (
        <Dropdown
            direction="bottom left"
            className={classNames('', {}, [className])}
            items={[
                ...(isAdminPanelAvailable ? [{
                    content: t('Админка'),
                    href: RoutePath.admin_panel,
                    key: '1'
                }] : []),
                {
                    content: t('Профиль'),
                    href: RoutePath.profile + authData.id,
                    key: '2'
                },
                {
                    content: t('Выйти'),
                    onClick: onLogout,
                    key: '3'
                },
            ]}
            trigger={<Avatar size={30} src={authData.avatar} />}
        />
    );
};
