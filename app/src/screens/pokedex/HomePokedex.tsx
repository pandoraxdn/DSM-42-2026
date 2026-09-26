import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native';
import { usePokemonPaginated } from '../../hooks/usePokemonPaginated';
import { appTheme } from '../../theme/appTheme';
import { PokemonCard } from '../../components/PokemonCard';

export const HomePokedex = () => {

  const { pokemonList, loadPokemon } = usePokemonPaginated();


  return(
    <View
      style={ appTheme.container }
    >
      <Image
        source={ require('./../../../assets/pokeball-dark.png') }
        style={{
          height: 300,
          position: 'absolute',
          right: -100,
          top: -100,
          width: 300
        }}
      />

      <FlatList
        data={ pokemonList }
        keyExtractor={ (pokemon, index) => `${pokemon.id}${index}` }
        ListHeaderComponent={(
          <View
            style={{
              height: 100,
              borderRadius: 20,
              margin: 20
            }}
          >
            <Text
              style={{
                ...appTheme.text,
                color: 'purple',
                fontSize: 50,
                fontWeight: 'bold',
                marginBottom: 20,
                marginTop: 20,
                shadowColor: 'pink',
                textShadowRadius: 20
              }}
            >
              Pokedex
            </Text>
          </View>
        )}
        showsVerticalScrollIndicator={ false }
        numColumns={ 2 }
        renderItem={ ( { item } ) => (
          <PokemonCard
            pokemon={ item }
          />
        )}
        onEndReached={ loadPokemon }
        onEndReachedThreshold={ 0.2 }
        ListFooterComponent={(
          <ActivityIndicator
            style={{ height: 120}}
            size={70}
            color="pink"
          />
        )}
      />
    </View>
  );
}
