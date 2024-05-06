import { View } from "react-native"
import { CategoryList, CustomButton, Profile, Header } from "../components";
import { StatusBar } from "../../util";


export const HomeScreen = () => {

  return (
    <>
      <StatusBar/>

      <View style={{ flexDirection: 'column' }}>  
        <Header/>
        <Profile/>
        <CategoryList />
        <CustomButton title={'Comenzar Juego'}/>
      </View>
    </>
  )
}