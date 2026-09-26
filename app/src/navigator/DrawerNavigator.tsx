import { createDrawerNavigator } from "@react-navigation/drawer";
import { StackNavigator } from "./StackNavigator";
import { PokemonNavigator } from "./PokemonNavigator";
import { useWindowDimensions } from "react-native";
import { DrawerMenu } from "../components/DrawerMenu";
import { FormScreen } from "../screens/FormScreen";

export type RootDrawerParams = {
  StackNavigator: undefined;
  PokemonNavigator: undefined;
  FormScreen: undefined;
}

const Drawer = createDrawerNavigator<RootDrawerParams>();


export const DrawerNavigator = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      initialRouteName='PokemonNavigator'
      screenOptions={{
        headerShown: true,
        drawerType: width > 720 ? 'permanent': 'front',
        drawerPosition: 'right',
        overlayColor: 'rgba(157,0,255,0.6)',
        drawerStyle: {
          backgroundColor: 'rgba(0,0,0,0.9)',
          width: width * 0.7
        }
      }}
      drawerContent={ (props) => <DrawerMenu {...props} /> }
    >
      <Drawer.Screen
        name='StackNavigator'
        component={StackNavigator}
      />
      <Drawer.Screen
        name='PokemonNavigator'
        component={PokemonNavigator}
      />
      <Drawer.Screen
        name='FormScreen'
        component={FormScreen}
      />
    </Drawer.Navigator>
  );
}
