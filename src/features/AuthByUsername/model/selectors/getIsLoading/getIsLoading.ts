import { createSelector } from '@reduxjs/toolkit';

import { getLoginForm } from '../getLoginForm/getLoginForm';

export const getIsLoading = createSelector(
    [getLoginForm],
    (loginForm) => loginForm?.isLoading || false,
)