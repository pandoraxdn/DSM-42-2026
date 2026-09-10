import { View, Text, StyleSheet } from 'react-native';
import { BtnTouch } from '../components/BtnTouch';
import { useCounterReducer } from '../hooks/useCounterReducer';

export const CounterReducerScreen = () => {

  const { state, add, reset, decrement, add2, decrement2 } = useCounterReducer({ count: 0 });
  
  return(
    <View
      style={ style.container }
    >
      <Text
        style={ style.text }
      >
        Contador Reducer: { state.count }
      </Text>

      <BtnTouch
        title="Add"
        color='pink'
        borderColor='violet'
        onPress={ () => add() }
      />
      <BtnTouch
        title="Add2"
        color='pink'
        borderColor='violet'
        onPress={ () => add2() }
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
      <BtnTouch
        title="Decrement 2"
        color='red'
        borderColor='orange'
        onPress={ () => decrement2() }
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
