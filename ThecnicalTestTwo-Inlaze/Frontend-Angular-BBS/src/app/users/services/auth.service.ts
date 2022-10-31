import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { userInterface } from '../interfaces/user.interface';
import { catchError, Observable } from 'rxjs';
import { UserInfo } from '../interfaces/userInfo.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private URL_USER = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private router: Router) {}

  signUp(user: userInterface): Observable<any> {
    return this.http.post<userInterface>(this.URL_USER + '/users', user).pipe(
      catchError((err: any) => {
        throw new Error(err);
      })
    );
  }

  loggedIn(user: userInterface): Observable<any> {
    return this.http
      .post<userInterface>(this.URL_USER + '/users/auth', user)
      .pipe(
        catchError((err: any) => {
          throw new Error(err);
        })
      );
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getRole() {
    return localStorage.getItem('role');
  }

  getUserInfo() {
    const user = localStorage.getItem('user') ?? '';
    return JSON.parse(user) as UserInfo;
  }
}
