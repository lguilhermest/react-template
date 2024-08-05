import { Dispatch } from "react";
import { ACTIONS, AuthState } from "./types";

interface IAction {
  type: ACTIONS;
  payload?: AuthState;
}

export function reducer(state: AuthState | any, action: IAction): AuthState {
  function update(data: Partial<AuthState>): AuthState {
    return { ...state, ...data }
  }
  switch (action.type) {
    case ACTIONS.LOGIN:
      return update({ isAuthenticated: true });
    case ACTIONS.LOGOUT:
      return update({ isAuthenticated: false });
    default:
      return state;
  }
};

export class Actions {
  dispatch: Dispatch<IAction>;

  constructor(dispatch: React.Dispatch<IAction>) {
    this.dispatch = dispatch;
  }

  login() {
    this.dispatch({ type: ACTIONS.LOGIN });
  };

  logout() {
    this.dispatch({ type: ACTIONS.LOGOUT });
  };
}
