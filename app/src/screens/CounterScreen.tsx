import { View, Text, StyleSheet, Button } from 'react-native';
import { useCounter } from '../hooks/useCounter';
import { BtnTouch } from '../components/BtnTouch';

export const CounterScreen = () => {

  const { counter, add, reset, decrement } = useCounter(0);
  
  return(
    <View
      style={ style.container }
    >
      <Text
        style={ style.text }
      >
        Contador: { counter }
      </Text>

      <BtnTouch
        title="Add"
        color='pink'
        borderColor='violet'
        onPress={ () => add() }
      />
      <BtnTouch
        title="Reset"
        color='green'
        borderColor='yellow'
        onPress={ () => reset() }
      />
      <BtnTouch
        title="Decrement"
        color='red'
        borderColor='orange'
        onPress={ () => decrement() }
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 40,
    color: 'green',
    fontWeight: 'bold'
  }
});
