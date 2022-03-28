import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromUsers from './users.reducer';

// users slice of state
export interface UsersState {
  users: fromUsers.UsersState;
}

// compose reducers
export const reducers: ActionReducerMap<UsersState> = {
  users: fromUsers.reducer,
};

// SELECT FEATURE SLICES
export const UsersFeatureState = createFeatureSelector<UsersState>('users');
