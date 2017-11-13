import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Rx';

import { UsersService } from './users.service';
import * as UserActions from './users.actions';
import { User } from './users.model';

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
      .catch((error: any) => Observable.of(new UserActions.LoadUsersFail({ error }))));
}
