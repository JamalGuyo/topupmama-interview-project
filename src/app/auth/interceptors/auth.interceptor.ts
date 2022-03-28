import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';

import { AuthService } from '../services/auth.service';

import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}`,
      },
    });
    return next.handle(tokenizedReq);
  }
}
