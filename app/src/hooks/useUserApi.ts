import { useEffect, useState } from "react";
import { pandoraApi } from "../api/pandoraApi";
import { UserRespose } from "../interfaces/pandoraApiRest";
import { FormUserData } from "./useFormUser";

interface UseUserApi{
  isLoading:  boolean;
  listUser:   UserRespose[];
  loadUsers:  () => void;
  createUser: ( data: FormUserData ) => void;
  updateUser: ( data: FormUserData ) => void;
  deleteUser: ( data: FormUserData ) => void;
}

export const useUserApi = (): UseUserApi => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [ listUser, setListUser ] = useState<UserRespose[]>([]);
  const urlApi = "http://10.94.133.235:3000/users";

  const loadUsers = async () => {
    setIsLoading(true);
    const response = await pandoraApi.get<UserRespose[]>( urlApi );
    setListUser( response.data );
    setIsLoading(false);
  }

  useEffect( () => {
    loadUsers();
  },[]);

  const createUser = async ( data: FormUserData ) => {
    const dataBody = {
      username: data.username,
      password: data.password,
      email: data.email,
      image: data.image,
      location: data.location
    }

    await pandoraApi.post( urlApi, dataBody );

  }

  const updateUser = async ( data: FormUserData ) => {
    if ( data.password ){
      const dataBody = {
        username: data.username,
        password: data.password,
        email: data.email,
        image: data.image,
        location: data.location
      }

      await pandoraApi.patch( `${urlApi}/${data.id_user}`, dataBody );
    }else {
      const dataBody = {
        username: data.username,
        email: data.email,
        image: data.image,
        location: data.location
      }
      await pandoraApi.patch( `${urlApi}/${data.id_user}`, dataBody );
    }

  }

  const deleteUser = async ( data: FormUserData ) => {

    await pandoraApi.delete( `${urlApi}/${data.id_user}`);

  }

  return { isLoading, listUser, loadUsers, createUser, updateUser, deleteUser };
   
}
