import React, { FC, ReactNode } from 'react';

import { useSelector } from 'react-redux';
import { getAuthData } from 'entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
    children: ReactNode;
}
export const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
    const authData = useSelector(getAuthData);
    const location = useLocation();

    if (!authData) {
        return (
            <Navigate to={RoutePath.main} state = {{ state: location }} replace />
        );
    }

    return children

};