import { View, Text, StyleSheet } from "react-native";
import { CategoryList, Profile } from "../components";
import { Header, StatusBar, theme } from "../../util";


export const HomeScreen = () => {
  
  return (
    <>
      <StatusBar/>

      <View style={{flex:1, backgroundColor: theme.brown_ligt}}>  
        <Header title={"Quiz App"} />
        <Profile/>

        <View style={ styles.container_text }>
          <Text style={ styles.text }>"Cuida el medio ambiente, cuida nuestro futuro"</Text>
        </View>

        <CategoryList />
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  container_text: {
    flex: 0.3,
    padding: 40,
    marginTop: '10%',
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '600',
    fontFamily: 'Rubik',
    fontStyle: 'italic',
    color: theme.brown_dark
  }
})