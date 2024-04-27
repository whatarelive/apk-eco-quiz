import { View, StyleSheet } from "react-native"
import { Header } from "../components/Header";
import { Profile } from "../components/Profile";

// TODO: falta por implementar la lista de categorias, el boton de juego aleatorio y un estado con las categorias. 
export const HomeScreen = () => {

  return (
    <View style={{display: 'flex'}}>
        <Header/>

        <View style={ styles.container }>
          <Profile/>        
        </View>

        <View>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  }
});