import { useState, useEffect } from "react";
import { PokemonDetailResponse } from "../interfaces/pokemonResponse";
import { pandoraApi } from "../api/pandoraApi";

interface UseDetailPokemon {
  isLoading: boolean;
  detailPokemon: PokemonDetailResponse;
}

export const useDetailPokemon = ( id: string | number ): UseDetailPokemon => {
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ detailPokemon, setDetailPokemon ] = useState<PokemonDetailResponse>({} as PokemonDetailResponse);

  const loadPokemon = async () => {
    setIsLoading(true);
    const response = await pandoraApi.get<PokemonDetailResponse>(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setDetailPokemon(response.data);
    setIsLoading(false);
  }

  useEffect( () => {
    loadPokemon();
  },[]);

  return { isLoading, detailPokemon };
}
