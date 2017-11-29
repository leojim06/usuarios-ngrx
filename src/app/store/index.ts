import { ActionReducerMap } from '@ngrx/store';

import * as fromUser from './reducers/users.reducer';

/**
 * Interface de State de la aplicación
 *
 * @export
 * @interface State
 */
export interface State {
  users: fromUser.State;
}

export const reducer: ActionReducerMap<State> = {
  users: fromUser.reducer
};
