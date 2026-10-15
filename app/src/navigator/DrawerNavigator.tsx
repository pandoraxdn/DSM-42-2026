import { createDrawerNavigator } from "@react-navigation/drawer";
import { StackNavigator } from "./StackNavigator";
import { DrawerMenu } from "../components/DrawerMenu";
import { FormScreen } from "../screens/FormScreen";
import { ImagePickerScreen } from "../screens/ImagePickerScreen";
import { LocationScreen } from "../screens/LocationScreen";
import { PokemonNavigator } from "./PokemonNavigator";
import { useWindowDimensions } from "react-native";
import { UserStackNavigator } from "./UserStackNavigator";

export type RootDrawerParams = {
  FormScreen:         undefined;
  ImagePickerScreen:  undefined;
  LocationScreen:     undefined;
  PokemonNavigator:   undefined;
  StackNavigator:     undefined;
  UserStackNavigator: undefined;
}

const Drawer = createDrawerNavigator<RootDrawerParams>();


export const DrawerNavigator = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      initialRouteName='UserStackNavigator'
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
      <Drawer.Screen
        name='ImagePickerScreen'
        component={ImagePickerScreen}
      />
      <Drawer.Screen
        name='LocationScreen'
        component={LocationScreen}
      />
      <Drawer.Screen
        name='UserStackNavigator'
        component={UserStackNavigator}
      />
    </Drawer.Navigator>
  );
}
