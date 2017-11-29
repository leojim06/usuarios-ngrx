import { Action } from '@ngrx/store';

import { User } from '../models/users.model';

export const LOAD_USERS = '[User] Load Users';
export const LOAD_USERS_SUCCESS = '[User] Load Users Success';

export const ADD_USER = '[User] Add User';
export const ADD_USER_SUCCESS = '[User] Add User Success';

export const UPDATE_USER = '[User] Update User';
export const UPDATE_USER_SUCCESS = '[User] Update User Success';

export const DELETE_USER = '[User] Delete User';
export const DELETE_USER_SUCCESS = '[User] Delete User Success';

export const SELECT_USER = '[User] Select User';
export const DESELECT_USER = '[User] DeSelect the User selected';

/**
 * Acción que solicita la carga de usuarios.
 *
 * @export
 * @class LoadUsers
 * @implements {Action}
 */
export class LoadUsers implements Action {
  readonly type = LOAD_USERS;
  /**
   * Crea una instancia de LoadUsers.
   * Acción que solicita la carga de usuarios.
   * @memberof LoadUsers
   */
  constructor() { }
}

/**
 * Acción que agrega los usuarios cargados exitosamente al store.
 *
 * @export
 * @class LoadUsersSuccess
 * @implements {Action}
 */
export class LoadUsersSuccess implements Action {
  readonly type = LOAD_USERS_SUCCESS;
  /**
   * Crea una instancia de LoadUsersSuccess.
   * Acción que agrega los usuarios cargados exitosamente al store.
   * @param {{ users: User[] }} payload Lista de usuarios a cargar en el store
   * @memberof LoadUsersSuccess
   */
  constructor(public payload: { users: User[] }) { }
}

/**
 * Acción que solicita la creación de un nuevo usuario.
 *
 * @export
 * @class AddUser
 * @implements {Action}
 */
export class AddUser implements Action {
  readonly type = ADD_USER;
  /**
   * Crea una instancia de AddUser.
   * Acción que solicita la creación de un nuevo usuario.
   * @param {{ user: User }} payload Usuario a crear con el effects y el service del user.
   * @memberof AddUser
   */
  constructor(public payload: { user: User }) { }
}

/**
 * Acción que agrega el usuario creado exitosamente al store.
 *
 * @export
 * @class AddUserSuccess
 * @implements {Action}
 */
export class AddUserSuccess implements Action {
  readonly type = ADD_USER_SUCCESS;
  /**
   * Crea una instancia de AddUserSuccess.
   * Acción que agrega el usuario creado exitosamente al store.
   * @param {{ user: User }} payload Usuario creado para cargar al store.
   * @memberof AddUserSuccess
   */
  constructor(public payload: { user: User }) { }
}

/**
 * Acción que solicita la actualización de información de un usuario.
 *
 * @export
 * @class UpdateUser
 * @implements {Action}
 */
export class UpdateUser implements Action {
  readonly type = UPDATE_USER;
  /**
   * Crea una instancia de UpdateUser.
   * Acción que solicita la actualización de información de un usuario.
   * @param {{ user: { id: number, changes: Partial<User> } }} payload id e información a modificar encapsulado en un objeto user
   * para ser usado en el effects y el service del user.
   * @memberof UpdateUser
   */
  constructor(public payload: { user: { id: number, changes: Partial<User> } }) { }
}

/**
 * Acción que agrega las modificaciones del usuario al store.
 *
 * @export
 * @class UpdateUserSuccess
 * @implements {Action}
 */
export class UpdateUserSuccess implements Action {
  readonly type = UPDATE_USER_SUCCESS;
  /**
   * Crea una instancia de UpdateUserSuccess.
   * Acción que agrega las modificaciones del usuario al store.
   * @param {{ user: { id: number, changes: Partial<User> } }} payload id e información modificada encapsulada en un objeto user
   * para ser usado por el adapter del store.
   * @memberof UpdateUserSuccess
   */
  constructor(public payload: { user: { id: number, changes: Partial<User> } }) { }
}

/**
 * Acción que solicita la eliminación de un recurso usuario.
 *
 * @export
 * @class DeleteUser
 * @implements {Action}
 */
export class DeleteUser implements Action {
  readonly type = DELETE_USER;
  /**
   * Crea una instancia de DeleteUser.
   * Acción que solicita la eliminación de un recurso usuario.
   * @param {{ id: number }} payload id del usuario a eliminar mediante el effects y service del user.
   * @memberof DeleteUser
   */
  constructor(public payload: { id: number }) { }
}

/**
 * Acción que elimina el usuario del store.
 *
 * @export
 * @class DeleteUserSuccess
 * @implements {Action}
 */
export class DeleteUserSuccess implements Action {
  readonly type = DELETE_USER_SUCCESS;
  /**
   * Crea una instancia de DeleteUserSuccess.
   * Acción que elimina el usuario del store.
   * @param {{ id: number }} payload id del usuario a eliminar del store.
   * @memberof DeleteUserSuccess
   */
  constructor(public payload: { id: number }) { }
}

/**
 * Acción que marca como selecionado al usuario deseado dentro del store.
 *
 * @export
 * @class SelectUser
 * @implements {Action}
 */
export class SelectUser implements Action {
  readonly type = SELECT_USER;
  /**
   * Crea una instancia de SelectUser.
   * Acción que marca como selecionado al usuario deseado dentro del store.
   * @param {{ id: number }} payload id del usuario a seleccionar en el store.
   * @memberof SelectUser
   */
  constructor(public payload: { id: number }) { }
}

/**
 * Acción que desmarca la selección de usuario en el store.
 * Esta se realiza colocando como null al usuario seleccionado
 *
 * @export
 * @class DeselectUser
 * @implements {Action}
 */
export class DeselectUser implements Action {
  readonly type = DESELECT_USER;
  /**
   * Crea una instancia de DeselectUser.
   * Acción que desmarca la selección de usuario en el store.
   * Esta se realiza colocando como null al usuario seleccionado.
   * @memberof DeselectUser
   */
  constructor() { }
}

export type All
  = LoadUsers
  | LoadUsersSuccess
  | AddUser
  | AddUserSuccess
  | UpdateUser
  | UpdateUserSuccess
  | DeleteUser
  | DeleteUserSuccess
  | SelectUser
  | DeselectUser;
