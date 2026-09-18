import { View, StyleSheet, useWindowDimensions } from "react-native";

export const PositionScreen = () => {

  const { width, height } = useWindowDimensions();

  return (
    <View
      style={ style.container }
    >
      <View
        style={{
          ...style.boxBlue,
          backgroundColor: 'olive',
          borderRadius: 150,
          height: height * 0.2,
          left: -20,
          position: 'absolute',
          top: -20,
          width: width * 0.4
        }}
      />
      <View
        style={{
          ...style.boxBlue,
          //width: width,
          //height: height * 0.33
        }}
      />
      <View
        style={{
          ...style.boxViolet,
          //width: width,
          //height: height * 0.33
        }}
      />
      <View
        style={{
          ...style.boxBlack,
          //width: width,
          //height: height * 0.33
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column-reverse',
    alignContent: 'center',
    justifyContent: 'space-evenly'
  },
  boxBlue: {
    //flex: 3
    backgroundColor: 'blue',
    height: 100,
    width: 100,
    alignSelf: 'flex-start'
  },
  boxViolet: {
    //flex: 3
    backgroundColor: 'violet',
    height: 100,
    width: 100
  },
  boxBlack: {
    //flex: 3
    backgroundColor: 'black',
    height: 100,
    width: 100,
    alignSelf: 'flex-end'
  }
});
