import { View } from "react-native"
import { useNavigate } from "react-router-native";
import { CategoryList, CustomButton, Profile, Header } from "../components";
import { StatusBar } from "../../util";


export const HomeScreen = () => {
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/quiz/:category/:question', { replace: true } );
  }

  return (
    <>
      <StatusBar/>

      <View style={{ flexDirection: 'column' }}>  
        <Header/>
        <Profile/>
        <CategoryList />
        <CustomButton title={'Comenzar Juego'} handleClick={ handleClick }/>
      </View>
    </>
  )
}