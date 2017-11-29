import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../store/models/users.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {

  private usersURL = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) { }

  private setHeaders() {
    return new HttpHeaders().set('Content-Type', 'application/json');
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.usersURL);
  }

  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(
      this.usersURL,
      user,
      { headers: this.setHeaders() }
    );
  }

  updateUser(user: { id: number, changes: Partial<User> }): Observable<User> {
    return this.httpClient.patch<User>(
      `${this.usersURL}/${user.id}`,
      user.changes,
      { headers: this.setHeaders() }
      // ).map((updatedUser: User) => ({ id: updatedUser.id, changes: updatedUser }));
    );
  }

  removeUser(id: number): Observable<any> {
    return this.httpClient.delete<User>(`${this.usersURL}/${id}`);
  }

}




