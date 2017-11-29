import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../store/models/users.model';
import { Observable } from 'rxjs/Observable';

/**
 * Servicio que se encarga de hacer el llamado al backend y solicitar las acciones del CRUD
 * mediante los verbos de HTTP
 *
 * @export
 * @class UsersService
 */
@Injectable()
export class UsersService {

  private usersURL = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) { }

  private setHeaders() {
    return new HttpHeaders().set('Content-Type', 'application/json');
  }

  /**
   * Retorna los recursos usuarios registrados en el backend
   *
   * @returns {Observable<User[]>} Lista de usuarios
   * @memberof UsersService
   */
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.usersURL);
  }

  /**
   * Agrega un recurso usuario en el backend
   *
   * @param {User} user Información de usuario a crear
   * @returns {Observable<User>} Usuario creado
   * (información enviada + datos adicionales creados en backend ej: id, createdAt, updatedAt, etc)
   * @memberof UsersService
   */
  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(
      this.usersURL,
      user,
      { headers: this.setHeaders() }
    );
  }
  /**
   * Actualizar un recurso usuario en el backend
   *
   * @param {{ id: number, changes: Partial<User> }} user Id del usuario a actualizar e información que se pretende modificar
   * @returns {Observable<User>} Usuario con cambios realizados
   * @memberof UsersService
   */
  updateUser(user: { id: number, changes: Partial<User> }): Observable<User> {
    return this.httpClient.patch<User>(
      `${this.usersURL}/${user.id}`,
      user.changes,
      { headers: this.setHeaders() }
    );
  }
  /**
   * Elimina un recurso usuario en el backend
   *
   * @param {number} id Id del usuario a eliminar
   * @returns {Observable<any>} Información enviada por el backend (no necesariamente el usuario eliminado,
   * podría ser un error de seguridad recuperar información de recursos ya eliminados o depende del backend,
   * se puede eniar información como cuantos recursos fueron manipulados ej: mongodb al eliminar un recurso
   * informa de cuántos recursos fueron modificados pero no la información del recurso).
   * @memberof UsersService
   */
  removeUser(id: number): Observable<any> {
    return this.httpClient.delete<User>(`${this.usersURL}/${id}`);
  }

}




