import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../store/index';
import * as fromUsers from '../../store/reducers/users.reducer';
import * as usersActions from '../../store/actions/users.actions';
import { User } from '../../store/models/users.model';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserIndexComponent implements OnInit {

  users: Observable<User[]>;

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router
  ) { }

  ngOnInit() {
    this.store.dispatch(new usersActions.LoadUsers());
    this.users = this.store.select(fromUsers.selectAllUsers);
  }

  editUser(user: User) {
    this.store.dispatch(new usersActions.SelectUser({ id: user.id }));
    this.router.navigate(['/users', user.id, 'edit']);
  }

  showUser(user: User) {
    this.store.dispatch(new usersActions.SelectUser({ id: user.id }));
    this.router.navigate(['/users/', user.id]);
  }

  deleteUser(user: User) {
    this.store.dispatch(new usersActions.DeleteUser({ id: user.id }));
  }

  createUser() {
    this.router.navigate(['/users/new']);
  }

}
