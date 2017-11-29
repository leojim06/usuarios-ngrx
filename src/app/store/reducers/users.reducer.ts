import { createSelector, createFeatureSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { User } from '../models/users.model';
import * as UserActions from '../actions/users.actions';

/**
 * Interface del State de la entity User.
 *
 * @export
 * @interface State
 * @extends {EntityState<User>}
 */
export interface State extends EntityState<User> {
  // additional entities state properties
  selectedUserId: number | null;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedUserId: null,
});

/**
 * Reducer para manipular la información del recurso User en el store de la aplicación.
 *
 * @export
 * @param {State} [state=initialState] Estado inicial de la aplicación.
 * @param {UserActions.All} actions Acciones que pueden originar cambios en el store de la aplicación.
 * @returns {State} Nuevo estado de la aplicación
 */
export function reducer(state: State = initialState, actions: UserActions.All): State {
  switch (actions.type) {
    case UserActions.LOAD_USERS_SUCCESS: {
      return adapter.addAll(actions.payload.users, state);
    }
    case UserActions.ADD_USER_SUCCESS: {
      return adapter.addOne(actions.payload.user, state);
    }
    case UserActions.UPDATE_USER_SUCCESS: {
      return adapter.updateOne(actions.payload.user, state);
    }
    case UserActions.DELETE_USER_SUCCESS: {
      return adapter.removeOne(actions.payload.id, state);
    }
    case UserActions.SELECT_USER: {
      return Object.assign({}, state, { selectedUserId: actions.payload.id });
    }
    case UserActions.DESELECT_USER: {
      return Object.assign({}, state, { selectedUserId: null });
    }

    default:
      return state;
  }
}

// Selectores para acceder a los atributos del state y recupera la información
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
export const selectCurrentUser = createSelector(
  selectUserEntities,
  selectCurrentUserId,
  (userEntities, userId) => userEntities[userId]);


