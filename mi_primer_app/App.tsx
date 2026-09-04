import { View, Text } from "react-native";

let nombre: string = "Rodrigo";

const App = () => {

  const grupo: string = "DSM-42";

  return (
    <View
      style={{
        alignItems: "center",
        alignContent: 'center'
      }}
    >
      <Text
        style={{
          marginTop: 400,
          fontSize: 50,
          color: 'purple',
          textAlign: 'center'
        }}
      >
        Hola {nombre}, saludos al grupo: {grupo}
      </Text>
    </View>
  );

}

export default App;
