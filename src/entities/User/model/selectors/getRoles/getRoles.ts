import { StateSchema } from '@/app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import { UserRole } from '../../types/userTypes';

export const getRoles = (state: Pick<StateSchema, 'user'>) => state.user?.authData?.roles;
export const isAdmin = createSelector(
    [getRoles],
    (roles) => Boolean(roles?.includes(UserRole.ADMIN)),
)
export const isManager = createSelector(
    [getRoles],
    (roles) => Boolean(roles?.includes(UserRole.MANAGER)),
)