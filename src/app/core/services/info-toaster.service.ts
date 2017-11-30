import { Injectable } from '@angular/core';
import { ToasterService, Toast } from 'angular2-toaster';

import { User } from '../../store/models/users.model';

/**
 * Tipo de error para personalizar la notificación capturada por el effect
 *
 * @export
 * @enum {number}
 */
export enum ErrorTypeToaster {
  LOAD,
  ADD,
  UPDATE,
  DELETE
}

/**
 * Servicio que informa mediante un toaster lo ocurrido en la aplicación
 *
 * @export
 * @class InfoToasterService
 */
@Injectable()
export class InfoToasterService {

  constructor(private toasterService: ToasterService) { }

  /**
   * Toaster informativo sobre la ocurrencia de un error en el proceso de
   * carga, creación, actualización o eliminación de un usuario. El comportamiento
   * es personalizado dependiendo del parametro enviado.
   *
   * @param {ErrorTypeToaster} typeError tipo de error ocurrido
   * @memberof InfoToasterService
   */
  public userActionsFailToaster(typeError: ErrorTypeToaster) {
    const myToaster: Toast = {
      type: 'error',
      title: 'Problemas con el usuario'
    };

    switch (typeError) {
      case ErrorTypeToaster.LOAD: {
        myToaster.body = 'No se pudo cargar la lista de usuarios';
        this.toasterService.pop(myToaster);
        break;
      }
      case ErrorTypeToaster.ADD: {
        myToaster.body = 'No se pudo agregar el usuario';
        this.toasterService.pop(myToaster);
        break;
      }
      case ErrorTypeToaster.UPDATE: {
        myToaster.body = 'No se pudo actualizar el usuario';
        this.toasterService.pop(myToaster);
        break;
      }
      case ErrorTypeToaster.DELETE: {
        myToaster.body = 'No se pudo eliminar el usuario';
        this.toasterService.pop(myToaster);
        break;
      }

      default:
        break;
    }
  }

  /**
   * Toaster informativo - exito al crear un nuevo usuario
   *
   * @param {User} user Usuario creado
   * @memberof InfoToasterService
   */
  public addUserSuccessToaster(user: User) {
    this.toasterService.pop(
      'success',
      'Usuario agregado',
      `Bienvenido usuario ${user.name}`
    );
  }

  /**
   * Toaster informativo - exito al actualizar un usuario
   *
   * @param {User} user Usuario actualizado
   * @memberof InfoToasterService
   */
  public updateUserSuccessToaster(user: User) {
    this.toasterService.pop(
      'success',
      'Usuario actualizado',
      `Nueva información para ${user.name}`
    );
  }

  /**
   * Toaster informativo - exito al eliminar un usuario
   *
   * @memberof InfoToasterService
   */
  public deleteUserSuccessToaster() {
    this.toasterService.pop(
      'success',
      'Usuario eliminado',
      'Vuelve cuando quieras. Te extrañaremos'
    );
  }

  /**
   * Toaster informativo - cancelación del proceso de eliminación de un usuario
   *
   * @memberof InfoToasterService
   */
  public cancelDeleteUserToaster() {
    this.toasterService.pop(
      'info',
      'Eliminación cancelada',
      'Se detuvo la eliminación del usuario. Gracias por continuar con nosotros'
    );
  }

}
