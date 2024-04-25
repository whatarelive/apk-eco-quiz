import { View } from "react-native"
import { Header } from "../components/Header";
import { Profile } from "../components/Profile";


export const HomeScreen = () => {

  return (
    <View style={{display: 'flex'}}>
        <Header/>
        <Profile/>

    </View>
  )
}