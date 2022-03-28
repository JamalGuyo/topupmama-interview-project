import { createReducer, on } from '@ngrx/store';
import { UserRes } from '../../models/res';

import * as fromActions from '../actions';

// user state
export interface UsersState {
  loaded: boolean;
  loading: boolean;
  data: UserRes[];
}

// initialState
export const initialState: UsersState = {
  loaded: false,
  loading: false,
  data: [],
};

// reducer
export const reducer = createReducer<UsersState>(
  initialState,
  on(fromActions.loadUsers, (state, action) => ({
    ...state,
    loaded: false,
    loading: true,
  })),

  on(fromActions.loadUsersSuccess, (state, action) => ({
    ...state,
    loaded: true,
    loading: false,
    data: [...state.data, action.payload],
  })),

  on(fromActions.loadUsersFail, (state, action) => ({
    ...state,
    loaded: false,
    loading: false,
    data: [],
  }))
);
