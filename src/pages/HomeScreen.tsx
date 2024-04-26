import { View } from "react-native"
import { Header } from "../components/Header";
import { Profile } from "../components/Profile";


export const HomeScreen = () => {

  return (
    <View style={{display: 'flex'}}>
        <Header/>

        <View style={{position: 'relative',flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50}}>

          <Profile/>
        
        </View>

    </View>
  )
}