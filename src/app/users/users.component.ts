import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as UsersActions from '../store/actions/users.actions';
import { selectAllUsers, selectUserTotal, selectCurrentUser, } from '../store/reducers/users.reducer';
import { User } from '../store/models/users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
  // encapsulation: ViewEncapsulation.None
})
export class UsersComponent implements OnInit {

  users: Store<User[]>;
  totalUsers: Store<number>;
  selectedUser: Store<User>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new UsersActions.LoadUsers);
    this.users = this.store.select(selectAllUsers);
    this.totalUsers = this.store.select(selectUserTotal);
    this.selectedUser = this.store.select(selectCurrentUser);
  }

  selectUser(user: User) {
    this.store.dispatch(new UsersActions.SelectedUser({ id: user.id }));
  }

  deselectUser() {
    this.store.dispatch(new UsersActions.DeselectUser());
  }

}
