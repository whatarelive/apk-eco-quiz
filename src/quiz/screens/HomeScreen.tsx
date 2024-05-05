import { View, StyleSheet } from "react-native"
import { Header } from "../components/Header";
import { Profile } from "../components/Profile";
import { CategoryList } from "../components/CategoryList";
import { CustomButton } from "../components/CustomButton";

// TODO: falta por organizar y limpiar los estilos. 
export const HomeScreen = () => {

  return (
    <View style={{display: 'flex', flexDirection: 'column'}}>
        
        <View style={{ ...styles.container, minHeight: '8%'}}>
          <Header/>
        </View>

        <View style={{ ...styles.container, minHeight: '12%'}}>
          <Profile/>
        </View>
        
        <View style={{ ...styles.container, maxHeight: '55%', marginTop: 30 }}>
          <CategoryList />
        </View>
        
        <View style={{ ...styles.container, minHeight: '5%'}}>
          <CustomButton title={'Comenzar Juego'}/>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: '5%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  }
});