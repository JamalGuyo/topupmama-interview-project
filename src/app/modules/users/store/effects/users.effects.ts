import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import {
  catchError,
  distinctUntilChanged,
  map,
  mergeMap,
  switchMap,
  take,
} from 'rxjs/operators';

import { UserService } from '../../services/users.service';
import * as userActions from '../actions/user.actions';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUsers = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loadUsers),
      switchMap((action) =>
        this.userService.getUsers(action.payload).pipe(
          map((res) => userActions.loadUsersSuccess({ payload: res })),
          catchError((error) =>
            of(userActions.loadUsersFail({ payload: error }))
          )
        )
      )
    )
  );
}
