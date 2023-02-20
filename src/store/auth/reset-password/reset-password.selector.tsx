import { createSelector } from 'reselect';

export const resetPasswordSelector = createSelector(
  (state: any) => state,
  (state) => state.resetPassword,
);
