import { StyleSheet } from "react-native";

export const appTheme = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    fontSize: 30,
    color: 'rgba(190, 39, 245, 0.9)',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  textInput: {
    fontSize: 25,
    backgroundColor: 'pink',
    textAlign: 'center',
    width: 350,
    height: 40,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: 'violet',
    marginTop: 10
  }
});
