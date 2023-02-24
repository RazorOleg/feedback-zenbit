import { createSelector } from 'reselect';

export const signUpSelector = createSelector(
  (state: any) => state,
  (state) => state.signUp,
);
