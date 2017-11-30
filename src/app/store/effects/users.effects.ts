import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Rx';

import { UsersService } from '../../users/users.service';
import * as UserActions from '../actions/users.actions';
import { User } from '../models/users.model';
import { InfoToasterService, ErrorTypeToaster } from '../../core/services/info-toaster.service';

/**
 * Effectos para el recurso usuario.
 * Un efecto captura el tipo de acción ejecutado en el store y dispara determinadas instrucciones
 *
 * @export
 * @class UsersEffects
 */
@Injectable()
export class UsersEffects {

  /**
   * Crea una instanica de UsersEffects.
   * @param {Actions} actions acciones a ser capturadas por el effect
   * @param {UsersService} usersService servicio de users para la comunicación con el backend
   * @memberof UsersEffects
   */
  constructor(
    private actions: Actions,
    private usersService: UsersService,
    private infoToasterService: InfoToasterService) { }

  /**
   * Efecto getUsers, que captura la acción LOAD_USERS y ejecuta la función getUsers() del servicio
   * @see UsersService para recupera los recursos del backend. Si los recupera de forma exitosa,
   * ejecuta la acción LoadUsersSuccess() del @see UserActions para cargar los datos recuperados
   * al store. En caso de fallo, el effect ejecuta el informe correspondiente.
   *
   * @memberof UsersEffects
   */
  @Effect()
  getUsers = this.actions
    .ofType(UserActions.LOAD_USERS)
    .switchMap(action => this.usersService.getUsers()
      .map((users: User[]) => new UserActions.LoadUsersSuccess({ users }))
      // .catch((error: any) => Observable.of(new UserActions.LoadUsersFali({ error })));
      .catch((error: any) => {
        this.infoToasterService.userActionsFailToaster(ErrorTypeToaster.LOAD);
        return Observable.empty();
      })
    );

  /**
   * Efecto addUser, que captura la acción ADD_USER y ejecuta la función addUser() del servicio
   * @see UsersService para crear un nuevo recurso en el backend. Si la creación del usuario es exitosa,
   * ejecuta la acción AddUserSuccess() del @see UserActions para cargar los datos del nuevo usuario
   * al store. En caso de fallo, el effect ejecuta el informe correspondiente.
   *
   * @memberof UsersEffects
   */
  @Effect()
  addUser = this.actions
    .ofType(UserActions.ADD_USER)
    .map(toPayload)
    .switchMap(payload => this.usersService.addUser(payload.user)
      .map((user: User) => {
        this.infoToasterService.addUserSuccessToaster(user);
        return new UserActions.AddUserSuccess({ user });
      })
      // .catch((error: any) => Observable.of(new UserActions.AddUserFail({ error }))));
      .catch((error: any) => {
        this.infoToasterService.userActionsFailToaster(ErrorTypeToaster.ADD);
        return Observable.empty();
      })
    );

  /**
   * Efecto updateUser, que captura la acción UPDATE_USER y ejecuta la función updateUser() del servicio
   * @see UsersService para actualizar la información del recurso en el backend. Si la actualización del usuario es exitosa,
   * ejecuta la acción UpdateUserSuccess() del @see UserActions para cargar los nuevos datos del usuario
   * al store. En caso de fallo, el effect ejecuta el informe correspondiente.
   *
   * @memberof UsersEffects
   */
  @Effect()
  updateUser = this.actions
    .ofType(UserActions.UPDATE_USER)
    .map(toPayload)
    .switchMap(payload => this.usersService.updateUser(payload.user)
      .map((user: any) => {
        this.infoToasterService.updateUserSuccessToaster(user);
        return new UserActions.UpdateUserSuccess({
          user: { id: user.id, changes: user }
        });
      })
      // .catch((error: any) => Observable.of(new UserActions.UpdateUserFail({ error }))));
      .catch((error: any) => {
        this.infoToasterService.userActionsFailToaster(ErrorTypeToaster.UPDATE);
        return Observable.empty();
      })
    );

  /**
   * Efecto removeUser, que captura la acción DELETE_USERy ejecuta la función removeUser() del servicio
   * @see UsersService para eliminar el recurson en el backend. Si la eliminación del usuario es exitosa,
   * ejecuta la acción DeleteUserSuccess() del @see UserActions para eliminar el usuario del store.
   * En caso de fallo, el effect ejecuta el informe correspondiente.
   *
   * @memberof UsersEffects
   */
  @Effect()
  removeUser = this.actions
    .ofType(UserActions.DELETE_USER)
    .map(toPayload)
    .switchMap(payload => this.usersService.removeUser(payload.id)
      .map((user: any) => {
        this.infoToasterService.deleteUserSuccessToaster();
        return new UserActions.DeleteUserSuccess({ id: payload.id });
      })
      // .catch((error: any) => Observable.of(new UserActions.DeleteUserFail({ error }))));
      .catch((error: any) => {
        this.infoToasterService.userActionsFailToaster(ErrorTypeToaster.DELETE);
        return Observable.empty();
      })
    );
}
