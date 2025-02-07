import { createSelector } from '@reduxjs/toolkit';
import { getUser } from '../getUser/getUser';

export const getAuthData = createSelector(
    [getUser],
    (user) => user.authData,
)