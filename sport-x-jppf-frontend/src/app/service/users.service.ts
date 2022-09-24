import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/Users';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  saveUser(user: Users) {
    return this.http.post(`${this.API_URI}/CreateUser`, user);
  }
}
