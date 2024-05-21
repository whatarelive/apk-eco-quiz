import { View, StyleSheet } from "react-native"
import { CustomButton } from "../CustomButton"
import { theme } from "../../../util"
import { useNavigate } from "react-router-native"



export const VictoryButtons = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home');
    }


  return (
    <View style={ styles.button_Container }>
        <CustomButton title="Volver" 
          handleClick={handleClick} 
          icon1={"exit"} icon2={"exit"} 
          color={ theme.brown_veryDark }
        />
        
        <CustomButton title="Revisar" 
          handleClick={handleClick} 
          icon1={"eyes"} icon2={"eyes"} 
          color={ theme.green_base } 
        />
    </View>
  )
}

const styles = StyleSheet.create({  
  button_Container: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
  }
})