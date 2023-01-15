import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { UserService } from './users.service';

@Injectable({
  providedIn: 'root'
})

export class TokenInterceptorService implements HttpInterceptor {

    constructor(
        private userService: UserService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const tokenizedReq = req.clone({
        setHeaders: {
            Authorization: `Bearer ${this.userService.getToken()}`
        }
        });
        return next.handle(tokenizedReq);
    } 
}