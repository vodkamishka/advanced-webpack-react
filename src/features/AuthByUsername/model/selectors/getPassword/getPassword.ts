import { createSelector } from '@reduxjs/toolkit';

import { getLoginForm } from '../getLoginForm/getLoginForm';

export const getPassword = createSelector(
    [getLoginForm],
    (loginForm) => loginForm?.password || '',
);
