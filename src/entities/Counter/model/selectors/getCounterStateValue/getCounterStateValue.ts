import { createSelector } from '@reduxjs/toolkit';
import { getCounterState } from '../getCounterState/getCounterState';

export const getCounterStateValue = createSelector(
    [getCounterState],
    (counter) => counter.value,
)