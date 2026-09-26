import { createContext, useReducer, ReactNode } from "react";
import { authReducer } from "./authReducer";

export interface AuthState {
  isLoggedIn:   boolean;
  username:     string | undefined;
  avatar:       string | undefined;
}

export const AuthInicialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  avatar: undefined
}

export interface AuthContextProps {
  authState:      AuthState;
  singIn:         () => void;
  logout:         () => void;
  changeAvatar:   ( avatar: string ) => void;
  chageUsername:  ( username: string ) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ( { children }: { children: ReactNode } ) => {

  //Reducer
  const [ authState, dispatch ] = useReducer( authReducer, AuthInicialState );

  const singIn = () => dispatch({ type: 'singIn' });
  const logout = () => dispatch({ type: 'logout' });
  const chageUsername = ( username: string ) => dispatch({ type: 'chageUsername', payload: username });
  const changeAvatar = ( avatar: string ) => dispatch({ type: 'changeAvatar', payload: avatar });

  return (
    <AuthContext.Provider
      value={{
        authState,
        singIn,
        logout,
        chageUsername,
        changeAvatar
      }}
    >
      { children }
    </AuthContext.Provider>
  );

}


