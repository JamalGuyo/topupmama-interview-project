import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { UserService } from '../../services/users.service';
import * as userActions from '../actions/user.actions';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUsers = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loadUsers),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map((res) => userActions.loadUsersSuccess({ payload: res })),
          catchError((error) =>
            of(userActions.loadUsersFail({ payload: error }))
          )
        )
      )
    )
  );
}
