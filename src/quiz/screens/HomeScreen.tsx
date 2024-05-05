import { View, StyleSheet } from "react-native"
import { CategoryList, CustomButton, Profile, Header } from "../components";
import { StatusBar } from "../../util";


export const HomeScreen = () => {

  return (
    <>
      <StatusBar/>

      <View style={ styles.screen }>
          
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
    </>
  )
}

const styles = StyleSheet.create({
  screen: {
    display: 'flex',
    flexDirection: 'column'
  },
  container: {
    marginBottom: '5%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  }
});