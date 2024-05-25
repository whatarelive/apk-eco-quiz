import { View } from "react-native";
import { CategoryList, Profile } from "../components";
import { Header, StatusBar } from "../../util";


export const HomeScreen = () => {
  
  return (
    <>
      <StatusBar/>

      <View style={{ flexDirection: 'column' }}>  
        <Header title={"Quiz App"}></Header>
        <Profile/>
        <CategoryList />
      </View>
    </>
  )
}
