import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Router } from '@angular/router';

import { User } from '../models/user';

//
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private registerUrl = `${environment.apiUrl}/api/register`;
  private loginUrl = `${environment.apiUrl}/api/login`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient, private router: Router) {}

  register(user: User): Observable<any> {
    return this.http
      .post<any>(this.registerUrl, JSON.stringify(user), this.httpOptions)
      .pipe(tap((res) => console.log(user)));
  }

  loginUser(user: User) {
    return this.http.post<any>(
      this.loginUrl,
      JSON.stringify(user),
      this.httpOptions
    );
    // .pipe(tap((res) => this.user$.next(res)));
  }

  // CHECK IF TOKEN IS AVAILABLE
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth']);
  }

  //
  getToken() {
    return localStorage.getItem('token');
  }
}
