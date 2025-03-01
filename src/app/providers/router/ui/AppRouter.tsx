import React, { useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig, RouteConfigProps } from 'shared/config/routeConfig/routeConfig';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

const AppRouter = () => {

    const renderWithWrapper = useCallback(({ path, element, withAuth }: RouteConfigProps) => {

        const elem = withAuth ? <RequireAuth>{element}</RequireAuth> : element;

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
