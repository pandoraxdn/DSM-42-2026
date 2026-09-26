import { useReducer } from "react";

export interface FormState {
  username:     string;
  password:     string;
  age:          string;
  stateCivil:   string;
}

export const initialForm: FormState = {
  username: '',
  password: '',
  age: '',
  stateCivil: ''
}

interface UseForm {
  state: FormState;
  handleInputChage: (fieldName: keyof FormState, value: string) => void;
}

type Action = { type: 'handleInputChage', payload: { fieldName: keyof FormState, value: string } };

const formReducer = ( state: FormState, action: Action ) => {
  switch( action.type ){
    case 'handleInputChage':
      return {
        ...state,
        [ action.payload.fieldName ] : action.payload.value
    }
  }
}

export const useForm = (): UseForm => {
  const [ state, dispatch ] = useReducer( formReducer, initialForm );
  const handleInputChage = ( fieldName: keyof FormState, value: string ) => {
    dispatch({ type: 'handleInputChage', payload: { fieldName, value } });
  }

  return { state, handleInputChage };
}
