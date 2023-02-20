import { createSelector } from 'reselect';

export const forgotPasswordSelector = createSelector(
  (state: any) => state,
  (state) => state.forgotPassword,
);
