
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../../users/services/auth.service';
import { Router } from '@angular/router';
import { userInterface } from '../../users/interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard /*implements CanActivate*/ {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  canActivate(): boolean {
    if (this.authService.getToken()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}