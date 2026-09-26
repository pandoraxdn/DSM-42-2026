import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { appTheme } from '../theme/appTheme';
import { useForm } from '../hooks/useForm';

export const FormScreen = () => {
  const { state, handleInputChage } = useForm();
  return(
    <View
      style={ appTheme.container }
    >
      <Text
        style={ appTheme.text }
      >
        FormScreen
      </Text>
      <View>
        <TextInput
          style={ appTheme.textInput }
          value={ state.username }
          onChangeText={ (text) => handleInputChage('username',text) }
          placeholder='Ingresa nombre del usuario'
          placeholderTextColor='black'
        />
        <TextInput
          style={ appTheme.textInput }
          value={ state.password }
          onChangeText={ (text) => handleInputChage('password',text) }
          placeholder='Ingresa contraseña'
          placeholderTextColor='black'
          keyboardType='default'
          secureTextEntry={true}
        />
        <TextInput
          style={ appTheme.textInput }
          value={ state.age }
          onChangeText={ (text) => handleInputChage('age',text) }
          placeholder='Edad'
          placeholderTextColor='black'
          keyboardType='default'
        />
        <TextInput
          style={ appTheme.textInput }
          value={ state.stateCivil }
          onChangeText={ (text) => handleInputChage('stateCivil',text) }
          placeholder='Estado Civil'
          placeholderTextColor='black'
        />
        <TouchableOpacity
          onPress={ () => console.log(state) }
        >
          <View
            style={{
              backgroundColor: 'violet',
              width: 200,
              height: 40,
              marginTop: 10,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10
            }}
          >
            <Text
              style={{ textAlign: 'center', fontSize: 30, color: "black" }}
            >
              Enviar datos
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
