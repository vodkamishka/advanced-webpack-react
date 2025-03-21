import { createSelector } from '@reduxjs/toolkit';

import { getUser } from '../getUser/getUser';

export const getIsInit = createSelector([getUser], (user) => user?.isInit);
