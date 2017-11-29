import { Component, OnInit, OnDestroy, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Store, ActionsSubject } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Subscription } from 'rxjs/Subscription';
import * as fromRoot from '../../store';
import * as fromUsers from '../../store/reducers/users.reducer';
import * as usersActions from '../../store/actions/users.actions';
import { User } from '../../store/models/users.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserEditComponent implements OnInit, OnDestroy {

  user: Observable<User>;
  redirectRouteSub: Subscription;

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,
    private actionsSubject: ActionsSubject
  ) { }

  ngOnInit() {
    this.user = this.store.select(fromUsers.selectCurrentUser);
    this.redirectRouteSub = this.actionsSubject
      .asObservable()
      .filter(action => action.type === usersActions.UPDATE_USER_SUCCESS)
      .subscribe((action: usersActions.UpdateUserSuccess) => {
        this.store.dispatch(new usersActions.DeselectUser());
        this.router.navigate(['/users']);
      });
  }

  ngOnDestroy() {
    this.redirectRouteSub.unsubscribe();
  }

  updateUser(partialUser: Partial<User>) {
    if (partialUser) {
      this.store.dispatch(new usersActions.UpdateUser(
        { user: { id: partialUser.id, changes: partialUser } }
      ));
    } else {
      this.store.dispatch(new usersActions.DeselectUser());
      this.router.navigate(['/users']);
    }
  }
}
