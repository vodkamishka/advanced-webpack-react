import { createSelector } from '@reduxjs/toolkit';

import { getLoginForm } from '../getLoginForm/getLoginForm';

export const getError = createSelector(
    [getLoginForm],
    (loginForm) => loginForm?.error || null,
)