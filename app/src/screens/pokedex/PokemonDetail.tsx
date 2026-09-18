import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { PokemonParams } from '../../navigator/PokemonNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { appTheme } from '../../theme/appTheme';
import { useTypeColorPokemon } from '../../hooks/useTypeColorPokemon';

interface Props extends StackScreenProps<PokemonParams, 'PokemonDetail'>{};

export const PokemonDetail = ( { navigation, route }:Props ) => {

  const pokemon = route.params.NewPokemon;
  const { color, isLoading } = useTypeColorPokemon(pokemon.id);

  return(
    <View
      style={{ flex: 1 }}
    >
      <View>
        <View
          style={{
            ...style.leftContainer,
            backgroundColor: (isLoading) ? 'gray': (color.length > 1) ? color[1]: color[0],
          }}
        />
        <View
          style={{
            ...style.rightContainer,
            backgroundColor: (isLoading) ? 'gray': color[0],
          }}
        />
      </View>
      <View>
        <View
          style={{
            position: 'absolute',
            marginHorizontal: 10
          }}
        >
          <TouchableOpacity
            onPress={ () => navigation.popToTop() }
          >
            <View>
              <Text
                style={ style.name }
              >
                { `<- ${pokemon.name} \n #${pokemon.id}` }
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Image
          style={ style.pokeball }
          source={ require('./../../../assets/pokeball-light.png') }
        /> 
        <Image
          style={ style.pokemon }
          source={{ uri:  pokemon.image }}
        /> 
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  leftContainer: {
    position: 'absolute',
    left: 0,
    height: 370,
    width: "50%",
    backgroundColor: 'pink',
    borderBottomLeftRadius: 1000,
    //borderTopLeftRadius: 1000
  },
  rightContainer: {
    position: 'absolute',
    right: 0,
    height: 370,
    width: "50%",
    backgroundColor: 'violet',
    borderBottomRightRadius: 1000,
    //borderTopRightRadius: 1000
  },
  pokeball: {
    alignSelf: 'center',
    height: 300,
    opacity: 0.7,
    position: 'absolute',
    top: 30,
    width: 300
  },
  pokemon: {
    height: 240,
    width: 240,
    marginTop: 50,
    alignSelf: 'center'
  },
  name: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center'
  },
});
