import { useEffect } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { appTheme } from '../../theme/appTheme';
import { BtnTouch } from '../../components/BtnTouch';
import { Fab } from '../../components/Fab';
import { StackScreenProps } from '@react-navigation/stack';
import { StackUserParams } from '../../navigator/UserStackNavigator';
import { useFormUser } from '../../hooks/useFormUser';
import { useImagePicker } from '../../hooks/useImagePicker';
import { useLocation } from '../../hooks/useLocation';

interface Props extends StackScreenProps<StackUserParams, 'FormUser'>{};

export const FormUser = ( { navigation, route }:Props ) => {

  const { state, handleInputChange, handleSubmit, handleDelete  } = useFormUser();
  const { image64, pickImage } = useImagePicker();
  const { location } = useLocation();

  useEffect( () => {
    const user = route.params;
    handleInputChange("id_user", user.id_user);
    handleInputChange("username", user.username);
    handleInputChange("email", user.email);
    handleInputChange("image", user.image);
    handleInputChange("location", `${location?.coords.altitude},${location?.coords.longitude}`);
  },[]);

  useEffect( () => {
    image64 && handleInputChange('image',image64);
  },[image64]);

  return (
    <View
      style={ appTheme.container }
    >
      <Text
        style={ appTheme.text }
      >
        Formulario de usuarios
      </Text>
      <View>
        {
          (state.id_user != 0) && (
            <BtnTouch
              title='Eliminar usuario'
              color='red'
              borderColor='violet'
              onPress={ () => {
                handleDelete();
                navigation.popToTop();
              }}
            />
          )
        }
      </View>
      <Fab
        title='<-'
        position='left'
        color='violet'
        action={ () => navigation.popToTop() }
      />
      <View>
        <Text
          style={{
            ...appTheme.text,
            fontSize: 18,
            textAlign: 'right',
            alignSelf: 'flex-start',
            marginHorizontal: 5,
            marginTop: 10
          }}
        >
          Nombre del usuario
        </Text>
        <TextInput
          style={ appTheme.textInput }
          placeholder='Nombre del usuario'
          value={ state.username }
          onChangeText={ (text) => handleInputChange('username', text) }
        />
      </View>
      <View>
        <Text
          style={{
            ...appTheme.text,
            fontSize: 18,
            textAlign: 'right',
            alignSelf: 'flex-start',
            marginHorizontal: 5,
            marginTop: 10
          }}
        >
          Correo del usuario
        </Text>
        <TextInput
          style={ appTheme.textInput }
          placeholder='Correo del usuario'
          value={ state.email }
          onChangeText={ (text) => handleInputChange('email', text) }
          keyboardType='email-address'
        />
      </View>
      <View>
        <Text
          style={{
            ...appTheme.text,
            fontSize: 18,
            textAlign: 'right',
            alignSelf: 'flex-start',
            marginHorizontal: 5,
            marginTop: 10
          }}
        >
          Contraseña del usuario
        </Text>
        <TextInput
          style={ appTheme.textInput }
          placeholder='Contraseña del usuario'
          value={ state.password }
          onChangeText={ (text) => handleInputChange('password', text) }
          keyboardType='default'
          secureTextEntry={true}
        />
      </View>
        <BtnTouch
          title='Seleccionar Imagen'
          onPress={ () => pickImage() }
          color='violet'
          borderColor='white'
        />
      {
        ( state.image ) && (
          <Image
            style={{
              width: 120,
              height: 120,
              borderRadius: 100,
              borderColor: 'violet',
              borderWidth: 10
            }}
            source={{ uri: `data:image/png;base64,${state.image}` }}
          />
        )
      }
      <View>
      </View>
      <View>
        <BtnTouch
          title={ state.id_user == 0 ? 'Crear usuario' : 'Actulizar usuario' }
          onPress={ () => {
            handleSubmit();
            navigation.popToTop();
          }}
          color='violet'
          borderColor='white'
        />
      </View>
    </View>
  );

}
