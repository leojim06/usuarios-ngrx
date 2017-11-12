import { Action } from '@ngrx/store';

import { User } from './users.model';

export const LOAD_USERS = '[User] Load Users';
export const LOAD_USERS_FAIL = '[User] Load Users Fail';
export const LOAD_USERS_SUCCESS = '[User] Load Users Success';
export const SELECT_USER = '[User] Select User';
export const DESELECT_USER = '[User] DeSelect the User selected';



export const ADD_USER = '[User] Add User';
export const ADD_USERS = '[User] Add Users';
export const UPDATE_USER = '[User] Update User';
export const UPDATE_USERS = '[User] Update Users';
export const DELETE_USER = '[User] Delete User';
export const DELETE_USERS = '[User] Delete Users';
export const CLEAR_USERS = '[User] Clear Users';

export class LoadUsers implements Action {
  readonly type = LOAD_USERS;
  constructor() { }
}

export class LoadUsersFail implements Action {
  readonly type = LOAD_USERS_FAIL;
  constructor(public payload: { error: any }) { }
}

export class LoadUsersSuccess implements Action {
  readonly type = LOAD_USERS_SUCCESS;
  constructor(public payload: { users: User[] }) { }
}

export class SelectedUser implements Action {
  readonly type = SELECT_USER;
  constructor(public payload: { id: number }) { }
}

export class DeselectUser implements Action {
  readonly type = DESELECT_USER;
  constructor() { }
}

export class AddUser implements Action {
  readonly type = ADD_USER;
  constructor(public payload: { user: User }) { }
}

export class AddUsers implements Action {
  readonly type = ADD_USERS;
  constructor(public payload: { users: User[] }) { }
}

export class UpdateUser implements Action {
  readonly type = UPDATE_USER;
  constructor(public payload: { user: { id: number, changes: Partial<User> } }) { }
}

export class UpdateUsers implements Action {
  readonly type = UPDATE_USERS;
  constructor(public payload: { users: { id: number, changes: Partial<User> }[] }) { }
}

export class DeleteUser implements Action {
  readonly type = DELETE_USER;
  constructor(public payload: { id: number }) { }
}

export class DeleteUsers implements Action {
  readonly type = DELETE_USERS;
  constructor(public payload: { ids: number[] }) { }
}

export class ClearUsers implements Action {
  readonly type = CLEAR_USERS;
}

export type All
  = LoadUsers
  | LoadUsersFail
  | LoadUsersSuccess
  | SelectedUser
  | DeselectUser
  | AddUser
  | AddUsers
  | UpdateUser
  | UpdateUsers
  | DeleteUser
  | DeleteUsers
  | ClearUsers;
