import { createStackNavigator } from "@react-navigation/stack";
import { Screen1 } from "../screens/stack/Screen1";
import { Screen2 } from "../screens/stack/Screen2";
import { Screen3 } from "../screens/stack/Screen3";

export type StackParams = {
  Screen1: undefined;
  Screen2: undefined;
  Screen3: undefined;
}

const Stack = createStackNavigator<StackParams>();

export const StackNavigator = () => {
  return(
    <Stack.Navigator
      initialRouteName="Screen1"
      screenOptions={{
        headerMode: 'float', //Screen
        headerShown: true,
        headerStyle: {
          height: 50,
          shadowColor: 'purple',
          backgroundColor: 'pink',
          borderColor: 'purple',
          borderWidth: 5,
          borderRadius: 15,
          opacity: 0.6
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: 'purple'
        },
        headerTintColor: 'purple',
        cardStyle: {
          backgroundColor: 'rgb(245,241,218)'
        }
      }}
    >
      <Stack.Screen
        name="Screen1"
        component={Screen1}
        options={{ title: 'Pantalla 1' }}
      />
      <Stack.Screen
        name="Screen2"
        component={Screen2}
        options={{ title: 'Pantalla 2' }}
      />
      <Stack.Screen
        name="Screen3"
        component={Screen3}
        options={{ title: 'Pantalla 3' }}
      />
    </Stack.Navigator>
  );
}
