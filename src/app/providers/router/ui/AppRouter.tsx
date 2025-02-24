import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { getAuthData } from 'entities/User/model/selectors/getAuthData/getAuthData';

const AppRouter = () => {

    const authData = useSelector(getAuthData);

    const getProtectedRoutes = () => {
        return Object.values(routeConfig).filter(({ withAuth }) => !(!authData && withAuth));
    }

    return (
        <Routes>
            {getProtectedRoutes()?.map(({ path, element }) => (
                <Route
                    path={path}
                    element={<div className="page-wrapper">{element}</div>}
                    key={path}
                />
            ))}
        </Routes>
    )
};

export default AppRouter;
