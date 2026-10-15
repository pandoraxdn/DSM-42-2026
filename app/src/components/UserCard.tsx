import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { UserRespose } from '../interfaces/pandoraApiRest';
import { useNavigation } from '@react-navigation/native';

interface Props {
  user: UserRespose;
}

export const UserCard = ( { user } :Props ) => {

  const navigation = useNavigation();

    return(
      <TouchableOpacity
        onPress={ () => navigation.navigate("FormUser",{...user}) }
      >
        <View
          style={ style.cardContent }
        >
            <Text
              style={ style.title }
            >
              { `Usuario: \n ${user.username}` }
            </Text>
            <Text
              style={{
                ...style.title,
                fontSize: 15
              }}
            >
              { `Correo: \n ${user.email}` }
              { `Last Update: \n ${user.update} \n` }
            </Text>
            <Image
              style={ style.avatar }
              source={{
                uri: `data:image/png;base64,${user.image}`
              }}
            />
        </View>
      </TouchableOpacity>
    );
}

const style = StyleSheet.create({
  avatar: {
    borderColor: "white",
    borderRadius: 100,
    borderWidth: 3,
    height: 70,
    position: 'absolute',
    right: -10,
    top: -10,
    width:  70
  },
  cardContent: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: "violet",
    borderRadius: 20,
    height: 120,
    justifyContent: 'center',
    marginBottom: 25,
    marginHorizontal: 5,
    overflow: "hidden",
    width: 180
  },
  title: {
    marginTop: 15,
    color: "white",
    fontSize: 18,
    textAlign: 'center'
  }
});
