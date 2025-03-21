import React, { FC, ReactNode, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getAuthData, getRoles, UserRole } from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
    children: ReactNode;
    roles?: UserRole[];
}
export const RequireAuth: FC<RequireAuthProps> = ({ children, roles }) => {
    const authData = useSelector(getAuthData);
    const location = useLocation();

    const userRoles = useSelector(getRoles);

    const hasRoles = useMemo(() => {
        if (!roles) {
            return true;
        }
        return roles.some((role) => userRoles?.includes(role));
    }, [roles, userRoles]);

    if (!authData) {
        return (
            <Navigate to={RoutePath.main} state={{ state: location }} replace />
        );
    }

    if (!hasRoles) {
        return (
            <Navigate
                to={RoutePath.forbidden}
                state={{ from: location }}
                replace
            />
        );
    }

    return children;
};
