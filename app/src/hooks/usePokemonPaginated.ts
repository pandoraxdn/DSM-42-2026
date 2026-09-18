import { useState, useRef, useEffect } from "react";
import { pandoraApi } from "../api/pandoraApi";
import { PokedexReponse, Result, NewPokemon } from "../interfaces/pokemonResponse";

export const usePokemonPaginated = () => {

  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ pokemonList, setPokemonList ] = useState<NewPokemon[]>([]);

  const nextUrl = useRef< string|null >("https://pokeapi.co/api/v2/pokemon");

  const loadPokemon = async () => {

    setIsLoading(true);

    if(!nextUrl.current){
      setIsLoading(false);
      return;
    }

    const response = await pandoraApi.get<PokedexReponse>(nextUrl.current);

    nextUrl.current = response.data.next;

    newPokemonList( response.data.results );

    setIsLoading(false);

  }

  const newPokemonList = ( data: Result[] ) => {
  
    const newList = data.map( ({ name, url }) =>{
      // https://pokeapi.co/api/v2/pokemon/1/ asasss
      const urlParts = url.split('/');
      const id = urlParts[ urlParts.length - 2 ];
      const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
      return { id, name, url, image };
    });

    setPokemonList( (prev) =>  (prev?.length == 0) ? [...newList] : [...prev, ...newList]);

  }

  useEffect(() => {
    loadPokemon();
  },[]);

  return { isLoading, pokemonList, loadPokemon };

}



