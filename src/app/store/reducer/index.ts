import { ActionReducerMap } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

export interface AppState {
  router: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer,
};
