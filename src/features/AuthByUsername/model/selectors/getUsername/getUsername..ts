import { createSelector } from '@reduxjs/toolkit';

import { getLoginForm } from '../getLoginForm/getLoginForm';

export const getUsername = createSelector(
    [getLoginForm],
    (loginForm) => {
        return loginForm?.username || '';
    },
)