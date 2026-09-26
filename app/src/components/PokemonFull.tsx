import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { PokemonDetailResponse } from '../interfaces/pokemonResponse';

interface Props {
  pokemon: PokemonDetailResponse;
  types: string[];
}

export const PokemonFull = ( { pokemon, types }:Props ) => {
  return(
    <View
      style={ style.containerDetail }
    >
      <ScrollView>
        <View>
          <Text style={style.text}>
            Types: {pokemon.types?.map(({ type }) => (
              <Text
                style={{
                  ...style.text,
                }}
                key={`${type.name}-${type.url}`}
              >
                { `${type.name} ` }
              </Text>
            ))}
          </Text>
        </View>
        <Text
          style={ style.text }
        >
          Weight: { pokemon.weight }
        </Text>
        <Text
          style={ style.text }
        >
          Base Experience: { pokemon.base_experience }
        </Text>
        <Text
          style={ style.text }
        >
          Default: { (pokemon.is_default) ? 'True': 'False' }
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          { pokemon.sprites?.front_shiny && (
            <Image
              style={ style.picture }
              source={{ uri: pokemon.sprites.front_shiny }}
            />
          )}
          { pokemon.sprites?.back_shiny && (
            <Image
              style={ style.picture }
              source={{ uri: pokemon.sprites.back_shiny }}
            />
          )}
          { pokemon.sprites?.front_female && (
            <Image
              style={ style.picture }
              source={{ uri: pokemon.sprites.front_female }}
            />
          )}
          { pokemon.sprites?.back_female && (
            <Image
              style={ style.picture }
              source={{ uri: pokemon.sprites.back_female }}
            />
          )}

          { pokemon.sprites?.front_shiny_female && (
            <Image
              style={ style.picture }
              source={{ uri: pokemon.sprites.front_shiny_female }}
            />
          )}

          { pokemon.sprites?.back_shiny_female && (
            <Image
              style={ style.picture }
              source={{ uri: pokemon.sprites.back_shiny_female }}
            />
          )}
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  containerDetail: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 40,
    textAlign: 'center'
  },
  picture: {
    width: 150,
    height: 150
  }
});
