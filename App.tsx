import { StyleSheet, View } from 'react-native';
import Constants from "expo-constants";
import { NativeRouter } from 'react-router-native';
import { useDimensions } from './src/util/hooks/useDimensions';
import { AppRouter } from './src/router/AppRouter';


export default function App() {

  const { ancho, alto } = useDimensions();
  
  return (
    <NativeRouter>
      <View style={{ minWidth: ancho, minHeight: alto, ...styles.container }}>
        <AppRouter />
      </View>
    </NativeRouter>
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