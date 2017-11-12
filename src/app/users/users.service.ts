import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './users.model';

@Injectable()
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient
      .get('https://jsonplaceholder.typicode.com/users');
  }

}




