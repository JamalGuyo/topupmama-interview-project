import {
  ActivatedRouteSnapshot,
  Params,
  RouterStateSnapshot,
} from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

// route state we want
export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

// serializer
export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;

    return { url, queryParams, params };
  }
}
