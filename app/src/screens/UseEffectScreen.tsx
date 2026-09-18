import { View, Text } from "react-native";
import { appTheme } from "../theme/appTheme";
import { useEffect, useState } from "react";

export const UseEffectScreen = ( ) => {

  const [ hora, setHora ] = useState( new Date() );
  const [ color, setColor ] = useState( 'violet' );

  const colors = [ 'red', 'blue', 'green', 'pink', 'yellow' ];

  const random = () => {
    const color = colors[ Math.floor( Math.random() * colors.length ) ];
    setColor(color);
  }

  useEffect( () => {
    const interval = setInterval( () => {
      setHora( new Date() );
      return () => clearInterval( interval );
    }, 1000); 

    const intervalColor = setInterval( () => {
      random();
      return () => clearInterval( intervalColor );
    }, 400); 
  },[]);

  return(
    <View
      style={ appTheme.container }
    >
        <Text
          style={{
            ...appTheme.text,
            color: color
          }}
        >
          Fecha y hora: { hora.toLocaleString() }
        </Text>
    </View>
  );
}
