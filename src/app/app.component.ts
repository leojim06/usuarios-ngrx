import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as UsersActions from './users/users.actions';
import {
  selectAllUsers,
  selectUserTotal,
  selectUserError,
  selectCurrentUserId,
  selectCurrentUser
} from './app.reducer';
import { User } from './users/users.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Usuarios con ngrx';
  users;
  total;
  error;
  selectCurrentUserId;
  selectCurrentUser;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new UsersActions.LoadUsers);
    this.users = this.store.select(selectAllUsers);
    this.total = this.store.select(selectUserTotal);
    this.error = this.store.select(selectUserError);
    this.selectCurrentUserId = this.store.select(selectCurrentUserId);
    this.selectCurrentUser = this.store.select(selectCurrentUser);
  }

  selectUser(selectedUser) {
    this.store.dispatch(new UsersActions.SelectedUser({ id: selectedUser.id }));
  }

  deselectUser() {
    this.store.dispatch(new UsersActions.DeselectUser());
  }
}
