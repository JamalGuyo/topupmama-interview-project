import { createAction, props } from '@ngrx/store';
import { UserRes } from '../../models/res';

// load users
export const loadUsers = createAction(
  '[Users] Load Users',
  props<{ payload: number }>()
);

// load users success
export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ payload: UserRes }>()
);

// load users fail
export const loadUsersFail = createAction(
  '[User] Load Users Fail',
  props<{ payload: string }>()
);
