export interface AuthState {
  isAuthenticated?: boolean;
}

export interface AuthContextProps {
  actions: {
    login: () => void;
    logout: () => void;
  };
  state: AuthState;
}

export enum ACTIONS {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}