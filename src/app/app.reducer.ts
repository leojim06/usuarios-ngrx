import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';

import * as fromUser from './users/users.reducer';

export interface State {
  users: fromUser.State;
}

export const reducer: ActionReducerMap<State> = {
  users: fromUser.reducer
};

export const selectUserState = createFeatureSelector<fromUser.State>('users');

export const {
  // select the array of user ids
  selectIds: selectUserIds,

  // select the dictionary of user entities
  selectEntities: selectUserEntities,

  // select the array of users
  selectAll: selectAllUsers,

  // select the total user count
  selectTotal: selectUserTotal
} = fromUser.adapter.getSelectors(selectUserState);

export const selectCurrentUserId = createSelector(selectUserState, fromUser.getSelectedUserId);
export const selectUserError = createSelector(selectUserState, fromUser.getUserError);

export const selectCurrentUser = createSelector(
  selectUserEntities,
  selectCurrentUserId,
  (userEntities, userId) => userEntities[userId]);
