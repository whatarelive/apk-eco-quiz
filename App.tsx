import { StyleSheet, View } from 'react-native';
import { Main } from './src/Main';



export default function App() {
  
  return (
    <View style={ styles.container }>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignContent: 'center',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
  },
});
