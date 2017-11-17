import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../store/models/users.model';

@Injectable()
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient
      .get('http://localhost:3000/users');
  }

}




