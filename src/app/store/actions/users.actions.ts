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

export class LoadUsers implements Action {
  readonly type = LOAD_USERS;
  constructor() { }
}

export class LoadUsersSuccess implements Action {
  readonly type = LOAD_USERS_SUCCESS;
  constructor(public payload: { users: User[] }) { }
}

export class AddUser implements Action {
  readonly type = ADD_USER;
  constructor(public payload: { user: User }) { }
}

export class AddUserSuccess implements Action {
  readonly type = ADD_USER_SUCCESS;
  constructor(public payload: { user: User }) { }
}

export class UpdateUser implements Action {
  readonly type = UPDATE_USER;
  constructor(public payload: { user: { id: number, changes: Partial<User> } }) { }
}

export class UpdateUserSuccess implements Action {
  readonly type = UPDATE_USER_SUCCESS;
  constructor(public payload: { user: { id: number, changes: Partial<User> } }) { }
}

export class DeleteUser implements Action {
  readonly type = DELETE_USER;
  constructor(public payload: { id: number }) { }
}

export class DeleteUserSuccess implements Action {
  readonly type = DELETE_USER_SUCCESS;
  constructor(public payload: { id: number }) { }
}

export class SelectUser implements Action {
  readonly type = SELECT_USER;
  constructor(public payload: { id: number }) { }
}

export class DeselectUser implements Action {
  readonly type = DESELECT_USER;
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
