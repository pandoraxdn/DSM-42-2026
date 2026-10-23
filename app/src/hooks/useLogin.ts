import { useReducer, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { RequestLogin } from "../interfaces/pandoraApiRest";
import { pandoraApi } from "../api/pandoraApi";

export interface LoginData {
  email: string;
  password: string;
}

interface UseLogin {
  isLoading:          boolean;
  state:              LoginData;
  handleLogin:        () => void;
  handleInputChange:  ( fieldName: keyof LoginData, value: string ) => void;
  request:            RequestLogin;
}

export const useLogin = (): UseLogin => {

  const initialState: LoginData = {
    email: '',
    password: ''
  }

  type Action = { type: 'handleInputChange', payload: { fieldName: keyof LoginData, value: string }  };

  const dataReducer = ( state: LoginData, action: Action ) => {
    switch ( action.type ){
      case 'handleInputChange':{
        return {
          ...state,
          [ action.payload.fieldName ]: action.payload.value
        }
      }
    }
  }

  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ state, dispatch ] = useReducer( dataReducer, initialState );
  const [ request, setRequest ] = useState<RequestLogin>({} as RequestLogin);
  const { singIn, changeAvatar, chageUsername } = useContext( AuthContext );

  const apiUrl: string = 'http://192.168.34.192:3000/users/login';

  const handleInputChange = ( fieldName: keyof LoginData, value: string ) => {
    dispatch({ type:'handleInputChange', payload: { fieldName, value } });
  }

  const handleLogin = async () => {
    setIsLoading(true);
    const dataBody = {
      email: state.email,
      password: state.password
    }

    try{
      const response = await pandoraApi.post<RequestLogin>(apiUrl,dataBody);
      setRequest(response.data);

      ( response.data ) && ( () => {
        singIn();
        response.data?.username && chageUsername(response.data.username);
        response.data?.image && changeAvatar(response.data.image);
      })();

    } catch (error){
      console.log('Error,', error)
      setRequest(false);
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, state, handleLogin, handleInputChange, request };

}
