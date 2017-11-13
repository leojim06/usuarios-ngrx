import { ActionReducerMap } from '@ngrx/store';

import * as fromUser from './users/users.reducer';

export interface State {
  users: fromUser.State;
}

export const reducer: ActionReducerMap<State> = {
  users: fromUser.reducer
};
