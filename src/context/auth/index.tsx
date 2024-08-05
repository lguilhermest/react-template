import { createContext, PropsWithChildren, useReducer } from "react";
import { AuthContextProps } from "./types";
import { Actions, reducer } from "./reducer";

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = (props: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, { isAuthenticated: false });

  return (
    <AuthContext.Provider value={{ actions: new Actions(dispatch), state }}>
      {props.children}
    </AuthContext.Provider>
  )
}