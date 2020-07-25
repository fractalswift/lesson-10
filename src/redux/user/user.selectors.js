import { createSelector } from 'reselect';

// this is an input selector
const selectUser = (state) => state.user;

// this is an output selector

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
