import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Modal } from 'ngx-modialog/plugins/vex';

import * as fromRoot from '../../store/index';
import * as fromUsers from '../../store/reducers/users.reducer';
import * as usersActions from '../../store/actions/users.actions';
import { User } from '../../store/models/users.model';
import { InfoToasterService } from '../../core/services/info-toaster.service';

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
    private router: Router,
    private infoToasterService: InfoToasterService,
    public modal: Modal
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
    this.modal.confirm()
      .isBlocking(true)
      .showCloseButton(false)
      .keyboard(27)
      .placeholder('Eliminar usuario')
      .message(`Desea eliminar al usuario ${user.name}`)
      .okBtn('Eliminar')
      .cancelBtn('Cancelar')
      .open()
      .result
      .then(result =>
        result ?
          this.store.dispatch(new usersActions.DeleteUser({ id: user.id })) :
          this.infoToasterService.cancelDeleteUserToaster())
      .catch(reason => this.infoToasterService.cancelDeleteUserToaster());
  }

  createUser() {
    this.router.navigate(['/users/new']);
  }

}
