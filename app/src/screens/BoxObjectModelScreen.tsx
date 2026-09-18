import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
  return(
    <View
      style={ style.container }
    >
      <Text
        style={ style.text }
      >
        BoxObjectModelScreen
      </Text>
      <View
        style={ style.boxPurple }
      >
        <Text
          style={ style.text }
        >
          Asgard
        </Text>
      </View>
      <Text
        style={ style.text }
      >
        BoxObjectModelScreen
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    //marginButtom,
    //marginLeft,
    //marginRight,
    //marginTop: 8,
    borderWidth: 3,
    color: 'red',
    fontSize: 35,
    textAlign: 'center'
  },
  boxPurple: {
    //margin: 10,
    //marginHorizontal,
    alignContent: 'center',
    backgroundColor: 'pink',
    marginVertical: 30,
    width: 150,
    //borderRadius: 60
  }
});
