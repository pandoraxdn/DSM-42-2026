import { createStackNavigator } from "@react-navigation/stack";
import { HomePokedex } from "../screens/pokedex/HomePokedex";
import { PokemonDetail } from "../screens/pokedex/PokemonDetail";
import { NewPokemon } from "../interfaces/pokemonResponse";

export type PokemonParams = {
  HomePokedex: undefined;
  PokemonDetail: NewPokemon;
}

const Stack = createStackNavigator<PokemonParams>();

export const PokemonNavigator = () => {
  return(
    <Stack.Navigator
      initialRouteName='HomePokedex'
      screenOptions={{
        headerShown: false,
        //animation: 'fade_from_bottom'
      }}
    >
      <Stack.Screen
        name="HomePokedex"
        component={HomePokedex}
      />
      <Stack.Screen
        name="PokemonDetail"
        component={PokemonDetail}
      />
    </Stack.Navigator>
  );
}
