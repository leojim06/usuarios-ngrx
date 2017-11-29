import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Rx';

import { UsersService } from '../../users/users.service';
import * as UserActions from '../actions/users.actions';
import { User } from '../models/users.model';

@Injectable()
export class UsersEffects {

  constructor(
    private actions: Actions,
    private usersService: UsersService) { }

  @Effect()
  getUsers = this.actions
    .ofType(UserActions.LOAD_USERS)
    .switchMap(action => this.usersService.getUsers()
      .map((users: User[]) => new UserActions.LoadUsersSuccess({ users }))
      // .catch((error: any) => Observable.of(new UserActions.LoadUsersFali({ error })));
      .catch((error: any) => {
        // Sustituir muestra de errores por servicio especial de información
        alert(error['error']['error']['message']);
        return Observable.empty();
      })
    );

  @Effect()
  addUser = this.actions
    .ofType(UserActions.ADD_USER)
    .map(toPayload)
    .switchMap(payload => this.usersService.addUser(payload.user)
      .map((user: User) => new UserActions.AddUserSuccess({ user }))
      // .catch((error: any) => Observable.of(new UserActions.AddUserFail({ error }))));
      .catch((error: any) => {
        alert(error['error']['error']['message']);
        return Observable.empty();
      })
    );

  @Effect()
  updateUser = this.actions
    .ofType(UserActions.UPDATE_USER)
    .map(toPayload)
    .switchMap(payload => this.usersService.updateUser(payload.user)
      .map((user: any) => new UserActions.UpdateUserSuccess({
        user: { id: user.id, changes: user }
      }))
      // .catch((error: any) => Observable.of(new UserActions.UpdateUserFail({ error }))));
      .catch((error: any) => {
        alert(error['error']['error']['message']);
        return Observable.empty();
      })
    );

  @Effect()
  removeUser = this.actions
    .ofType(UserActions.DELETE_USER)
    .map(toPayload)
    .switchMap(payload => this.usersService.removeUser(payload.id)
      .map((user: any) => new UserActions.DeleteUserSuccess({ id: payload.id }))
      // .catch((error: any) => Observable.of(new UserActions.DeleteUserFail({ error }))));
      .catch((error: any) => {
        alert(error['error']['error']['message']);
        return Observable.empty();
      })
    );


}
