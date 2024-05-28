import { View, Text, StyleSheet } from "react-native";
import { CategoryList, Profile } from "../components";
import { Header, StatusBar, theme } from "../../util";
import {RFValue} from "react-native-responsive-fontsize";


export const HomeScreen = () => {
  
  return (
    <>
      <StatusBar/>

      <View style={{ flex: 1, backgroundColor: theme.brown_ligt}}>  
        <Header title={"Eco Quiz"} />
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
    flex: 1,
    padding: RFValue(40),
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: RFValue(20),
    fontWeight: '600',
    fontFamily: 'Rubik',
    fontStyle: 'italic',
    color: theme.brown_dark
  }
})