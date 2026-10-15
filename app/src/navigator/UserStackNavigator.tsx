import { createStackNavigator } from "@react-navigation/stack";
import { FormUser } from "../screens/users/FormUser";
import { HomeUSer } from "../screens/users/HomeUser";
import { UserRespose } from "../interfaces/pandoraApiRest";

export type StackUserParams = {
  HomeUSer: undefined;
  FormUser: UserRespose;
}

const Stack = createStackNavigator<StackUserParams>();

export const UserStackNavigator = () => {
  return(
    <Stack.Navigator
      initialRouteName="HomeUSer"
      screenOptions={{
        headerMode: 'float', //Screen
        headerShown: false
      }}
    >
      <Stack.Screen
        name="HomeUSer"
        component={HomeUSer}
      />
      <Stack.Screen
        name="FormUser"
        component={FormUser}
      />
    </Stack.Navigator>
  );
}
