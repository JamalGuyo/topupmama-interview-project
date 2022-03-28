import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// schemas
import { User } from '../models/user';
import { UserRes } from '../models/res';
// rxjs
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
//
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // products api url
  URL = `${environment.apiUrl}/api/users`;

  constructor(private http: HttpClient) {}

  // get all users
  getUsers(page: number = 1): Observable<UserRes> {
    return this.http
      .get<UserRes>(this.URL, {
        params: { page },
      })
      .pipe(tap((res) => console.log(res)));
  }

  //   get a single user
  getUser(userId: number): Observable<User> {
    return this.http.get<User>(`${this.URL}/${userId}`);
  }

  // create user
  createUser(data: { name: string; job: string }): Observable<any> {
    return this.http.post<any>(this.URL, data);
  }
}
