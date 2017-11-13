import { createSelector, createFeatureSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { User } from './users.model';
import * as UserActions from './users.actions';

export interface State extends EntityState<User> {
  // additional entities state properties
  selectedUserId: number | null;
  error: any | null;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedUserId: null,
  error: null
});

export function reducer(state: State = initialState, actions: UserActions.All): State {
  switch (actions.type) {
    case UserActions.LOAD_USERS:
      return Object.assign({}, state, initialState);
    case UserActions.LOAD_USERS_FAIL:
      return Object.assign({}, state, { error: actions.payload.error });
    case UserActions.SELECT_USER:
      return Object.assign({}, state, { selectedUserId: actions.payload.id });
    case UserActions.DESELECT_USER:
      return Object.assign({}, state, { selectedUserId: null });
    case UserActions.LOAD_USERS_SUCCESS:
      return adapter.addAll(actions.payload.users, state);
    case UserActions.ADD_USER:
      return adapter.addOne(actions.payload.user, state);
    case UserActions.ADD_USERS:
      return adapter.addMany(actions.payload.users, state);
    case UserActions.UPDATE_USER:
      return adapter.updateOne(actions.payload.user, state); // Revisar lo de id & changes
    case UserActions.UPDATE_USERS:
      return adapter.updateMany(actions.payload.users, state);
    case UserActions.DELETE_USER:
      return adapter.removeOne(actions.payload.id, state);
    case UserActions.DELETE_USERS:
      return adapter.removeMany(actions.payload.ids, state);
    case UserActions.CLEAR_USERS:
      return adapter.removeAll(state);

    default:
      return state;
  }
}

export const selectUserState = createFeatureSelector<State>('users');

export const {
  // select the array of user ids
  selectIds: selectUserIds,

  // select the dictionary of user entities
  selectEntities: selectUserEntities,

  // select the array of users
  selectAll: selectAllUsers,

  // select the total user count
  selectTotal: selectUserTotal
} = adapter.getSelectors(selectUserState);

export const selectCurrentUserId = createSelector(selectUserState, (state: State) => state.selectedUserId);
export const selectUserError = createSelector(selectUserState, (state: State) => state.error);
export const selectCurrentUser = createSelector(
  selectUserEntities,
  selectCurrentUserId,
  (userEntities, userId) => userEntities[userId]);


