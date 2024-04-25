import { StyleSheet, View } from 'react-native';
import { Main } from './src/Main';
import  Constants  from "expo-constants";
import { useDimensions } from './src/hooks/useDimensions';
import { useEffect } from 'react';


export default function App() {

  const { ancho, alto, getDimensions } = useDimensions();

  useEffect(() => {
      getDimensions();
  }, [])
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      minWidth: ancho,
      minHeight: alto - Constants.statusBarHeight,
      marginTop : Constants.statusBarHeight,
      backgroundColor: '#ffffff',
      alignContent: 'center',
      justifyContent: 'flex-start',
    },
  });
  
  return (
      <View style={ styles.container }>
        <Main/>
      </View>
  );
}
