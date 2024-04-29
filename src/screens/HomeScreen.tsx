import { View, StyleSheet } from "react-native"
import { Header } from "../components/Header";
import { Profile } from "../components/Profile";
import { CategoriesList } from "../components/CategoriesList";
import { StyleSheetButton } from "../components/StyleSheetButton";

// TODO: falta por organizar y limpiar los estilos. 
export const HomeScreen = () => {

  return (
    <View style={{display: 'flex', flexDirection: 'column'}}>
        
        <View style={{ ...styles.container , backgroundColor: '#534', minHeight: '10%'}}>
          <Header/>
        </View>

        <View style={{ ...styles.container, backgroundColor: '#111', minHeight: '20%'}}>
          <Profile/>
        </View>
        
        <View style={{ ...styles.container, backgroundColor: '#215', minHeight: '50%'}}>
          <CategoriesList />
        </View>
        
        <View style={{ ...styles.container , backgroundColor: '#684', minHeight: '10%'}}>
          <StyleSheetButton />
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