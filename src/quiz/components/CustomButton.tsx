import { View, Text,Image, TouchableNativeFeedback, StyleSheet } from "react-native";
import { theme, useImage } from "../../util";
import { CustomButtonProps } from "../types";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';



export const CustomButton = ( { title, icon, color, handleClick }: CustomButtonProps ): JSX.Element => {

  const image = useImage( icon , 'uiImage');

  return (
    <TouchableNativeFeedback
      onPress={ () => handleClick() }>  
        <View style={{ ...styles.container, backgroundColor: color }}>
          
          <Image 
            source={ image } 
            style={ styles.img }
          />   
          
          <Text 
            style={ styles.text }>
            { title }
          </Text>
        
        </View>
    </TouchableNativeFeedback>
  )
}


const styles = StyleSheet.create({
  container: {
    width: RFPercentage(20),
    height: RFPercentage(7),
    padding: '2%',
    margin: '3%',
    paddingHorizontal: '7%',
    borderRadius: RFValue(40),
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  img:{
    alignSelf: 'center',
    width: RFValue(25),
    height: RFValue(25)
  },
  text: {
    flex: 1,
    fontSize: RFValue(18),
    fontWeight: '700',
    textAlignVertical: 'center',
    textAlign: 'center',
    color: theme.white
  }
});