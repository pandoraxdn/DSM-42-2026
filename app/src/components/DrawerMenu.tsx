import { View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";
import { DrawerContentScrollView, DrawerContentComponentProps } from "@react-navigation/drawer";

interface BtnProps {
  action: () => void;
  text:   string;
}

const BtnMenu = ( { action, text }:BtnProps ) => {
  return (
    <TouchableOpacity
      onPress={ action }
    >
      <View
        style={ style.textBg }
      >
        <Text
          style={ style.text }
        >
          { text }
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export const DrawerMenu = ( { navigation }: DrawerContentComponentProps ) => {

  return (
    <DrawerContentScrollView>
      <View
        style={ style.container }
      >
        <View
          style={ style.avatarBorder }
        >
          <Image
            style={ style.avatar }
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkeEo_JMBF7RZeBZEZdlDMuV7Eyp6Xt1YlNGG0UrUWhyys3bmgGb9SIUs&s=10' }}
          />
        </View>
        <Text
          style={ style.username }
        >
          User: Pandora
        </Text>
        <View
          style={ style.container }
        >

        <BtnMenu
          text="Pokedex"
          action={ () => navigation.navigate('PokemonNavigator') }
        />

        <BtnMenu
          text="Palitos y bolitas"
          action={ () => navigation.navigate('StackNavigator') }
        />

        <BtnMenu
          text="Formulario"
          action={ () => navigation.navigate('FormScreen') }
        />

        </View>
      </View>
    </DrawerContentScrollView>
  );

}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textBg: {
    backgroundColor: 'white',
    borderColor: 'violet',
    borderRadius: 10,
    borderWidth: 5,
    marginTop: 10,
    width: 240
  },
  text: {
    color: "black",
    fontSize: 30,
    textAlign: 'center'
  },
  avatar: {
    borderColor: 'gray',
    borderRadius: 100,
    borderWidth: 10,
    height: 180,
    width: 180
  },
  avatarBorder: {
    borderColor: 'white',
    borderRadius: 100,
    borderWidth: 10,
    height: 200,
    width: 200
  },
  username: {
    fontSize: 40,
    color: "white",
    fontWeight: 'bold'
  }
});
