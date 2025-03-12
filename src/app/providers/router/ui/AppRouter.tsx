import React, { useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig, RouteConfigProps } from 'shared/config/routeConfig/routeConfig';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

const AppRouter = () => {

    const renderWithWrapper = useCallback(({ path, element, withAuth, roles }: RouteConfigProps) => {

        const elem = withAuth ? <RequireAuth roles={roles}>{element}</RequireAuth> : element;

        return (
            <Route
                path={path}
                element={elem}
                key={path}
            />
        )
    }, [])

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    )
};

export default AppRouter;
