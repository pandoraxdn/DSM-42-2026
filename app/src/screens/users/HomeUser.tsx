import { useEffect } from 'react';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import { appTheme } from '../../theme/appTheme';
import { BtnTouch } from '../../components/BtnTouch';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { UserCard } from '../../components/UserCard';
import { UserRespose } from '../../interfaces/pandoraApiRest';
import { useUserApi } from '../../hooks/useUserApi';

export const HomeUSer = () => {

  const { isLoading, loadUsers, listUser } = useUserApi();
  const navigation = useNavigation();
  const focused = useIsFocused();

  useEffect( () =>  {
    loadUsers();
  },[ focused ]);

  const create: UserRespose = {
    id_user: 0,
    username: '',
    email: '',
    password: '',
    image: '',
    location: '',
    update: new Date(),
  };

  return (
    <View
      style={ appTheme.container }
    >
      <FlatList
        data={ listUser }
        keyExtractor={ (item) => `#${item.id_user}` }
        ListHeaderComponent={(
          <View
            style={{
              alignContent: "center",
              alignItems: "center",
              justifyContent: 'center'
            }}
          >
            <Text
              style={ appTheme.text }
            >
              Lista de Usuarios
            </Text>
            <BtnTouch
              title='Crear usuario'
              color='violet'
              borderColor='pink'
              onPress={ () => navigation.navigate('FormUser',{...create}) }
            />
          </View>
        )}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        refreshControl={(
          <RefreshControl
            refreshing={ isLoading }
            onRefresh={ loadUsers }
            colors={[ "pink", "violet", "black" ]}
            progressBackgroundColor="black"
          />
        )}
        renderItem={ ({ item }) => (
          <UserCard
            user={ item }
          />
        )}
      />
    </View>
  );

}
