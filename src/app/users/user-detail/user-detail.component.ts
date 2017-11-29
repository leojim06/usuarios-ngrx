import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../store/index';
import * as fromUsers from '../../store/reducers/users.reducer';
import * as usersActions from '../../store/actions/users.actions';
import { User } from '../../store/models/users.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: Observable<User>;

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.store.select(fromUsers.selectCurrentUser);
  }

  goBack() {
    this.store.dispatch(new usersActions.DeselectUser());
    this.router.navigate(['/users']);
  }

}
