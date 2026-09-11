import { createStackNavigator } from "@react-navigation/stack";
import { HomePokedex } from "../screens/pokedex/HomePokedex";
import { PokemonDetail } from "../screens/pokedex/PokemonDetail";

export type StackParams = {
  HomePokedex: undefined;
  PokemonDetail: undefined;
}

const Stack = createStackNavigator<StackParams>();

export const PokemonNavigator = () => {
  return(
    <Stack.Navigator
      initialRouteName='HomePokedex'
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
