import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from "expo-constants";
import { useDimensions } from './src/hooks/useDimensions';
import { Main } from './src/Main';


export default function App() {

  const { ancho, alto, getDimensions } = useDimensions();

  useEffect(() => {
      getDimensions();
  }, [])
  
  return (
      <View style={{ minWidth: ancho, minHeight: alto, ...styles.container }}>

        <Main/>
      
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop : Constants.statusBarHeight,
    backgroundColor: '#ffffff',
    alignContent: 'center',
    justifyContent: 'flex-start',
  },
});