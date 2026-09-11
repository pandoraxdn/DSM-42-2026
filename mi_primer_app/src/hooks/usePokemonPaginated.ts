import { useState, useRef, useEffect } from "react";
import { pandoraApi } from "../api/pandoraApi";
import { PokedexReponse } from "../interfaces/pokemonResponse";

export const usePokemonPaginated = () => {

  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ pokemonList, setPokemonList ] = useState<PokedexReponse>({} as PokedexReponse);

  const nextUrl = useRef("https://pokeapi.co/api/v2/pokemon/?limit=20");

  const loadPokemon = async () => {

    setIsLoading(true);

    const response = await pandoraApi.get<PokedexReponse>(nextUrl.current);

    setPokemonList(response.data);

    setIsLoading(false);

  }

}



