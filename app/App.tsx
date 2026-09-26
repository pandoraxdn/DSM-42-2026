import { ReactNode } from "react";
//import { PositionScreen } from "./src/screens/PositionScreen";
//import { BoxObjectModelScreen } from "./src/screens/BoxObjectModelScreen";
//import { CounterScreen } from "./src/screens/CounterScreen";
//import { CounterReducerScreen } from "./src/screens/CounterReducerScreen";
//import { UseEffectScreen } from "./src/screens/UseEffectScreen";
//import { StackNavigator } from "./src/navigator/StackNavigator";
//import { PokemonNavigator } from "./src/navigator/PokemonNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigator } from "./src/navigator/DrawerNavigator";
import { AuthProvider } from "./src/context/AuthContext";

const App = () => {

  return (
    <AppState>
      <NavigationContainer>
        <DrawerNavigator/>
      </NavigationContainer>
    </AppState>
  );

}

const AppState = ( { children }: { children: ReactNode } ) => {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  );
}

export default App;
