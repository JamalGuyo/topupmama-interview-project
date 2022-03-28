import { createSelector } from '@ngrx/store';
import * as fromReducers from '../reducers';

// select user slice of state
export const UserSliceState = createSelector(
  fromReducers.UsersFeatureState,
  (state) => state.users
);

// get loaded state
export const getLoaded = createSelector(
  UserSliceState,
  (state) => state.loaded
);

// get loaded state
export const getLoading = createSelector(
  UserSliceState,
  (state) => state.loading
);

// get loaded state
export const getData = createSelector(UserSliceState, (state) => state.data);
