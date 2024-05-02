import { View, StyleSheet } from "react-native"
import { Header } from "../components/Header";
import { Profile } from "../components/Profile";
import { CategoryList } from "../components/CategoryList";
import { StyleSheetButton } from "../components/StyleSheetButton";

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
        
        <View style={{ ...styles.container, maxHeight: '50%', marginTop: 40}}>
          <CategoryList />
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