import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import Swal from 'sweetalert2';

@Injectable()
export class UserService {

  private URL = 'http://localhost:3000/api'

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.URL + '/auth/register', user).pipe(
      catchError((error: any) => {
        throw new Error(error)
      })
    )
  }

  loginUser(user: User): Observable<User> {
    return this.http.post<User>(this.URL + '/auth/login', user).pipe(
      catchError((error: any) => {
        throw new Error(error)
      })
    )
  }

  loggedIn(): boolean {
    return !!localStorage.getItem('token')
  }

  logoutUser() {
    Swal.fire({
      title: 'Do you want to close the session?',
      showDenyButton: true,
      confirmButtonText: 'Accept',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('token');
        this.router.navigate(['/home']);
      } else if (result.isDenied) {
        Swal.fire('The current session was not closed')
      }
    })
  }

  getToken() {
    return localStorage.getItem('token')
  }
}
