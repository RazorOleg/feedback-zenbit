import { createSelector } from 'reselect';

export const citySelector = createSelector(
    (state: any) => state,
    (state) => state.city,
)