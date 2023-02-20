import { createSelector } from 'reselect';

export const signInSelector = createSelector(
  (state: any) => state,
  (state) => state.signIn,
);
