import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Store, ActionsSubject } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';

import * as userActions from '../../store/actions/users.actions';
import * as fromRoot from '../../store/index';
import { User } from '../../store/models/users.model';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserNewComponent implements OnInit, OnDestroy {

  redirectRouteSub: Subscription;

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,
    private actionsSubject: ActionsSubject
  ) { }

  ngOnInit() {
    this.redirectRouteSub = this.actionsSubject
      .asObservable()
      .filter(action => action.type === userActions.ADD_USER_SUCCESS)
      .subscribe((action: userActions.AddUserSuccess) =>
        this.router.navigate(['/users'])
      );
  }

  ngOnDestroy() {
    this.redirectRouteSub.unsubscribe();
  }

  createUser(user: User) {
    user ?
      this.store.dispatch(new userActions.AddUser({ user })) :
      this.router.navigate(['/users']);
  }
}
