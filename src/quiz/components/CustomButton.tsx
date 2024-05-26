import { View, Text,Image, TouchableNativeFeedback, StyleSheet } from "react-native";
import { theme, useImage } from "../../util";
import { CustomButtonProps } from "../types";



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
    flex: 1,
    height: '45%',
    padding: '2%',
    margin: '3%',
    paddingHorizontal: '7%',
    borderRadius: 40,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  img:{
    alignSelf: 'center',
  },
  text: {
    flex: 1,
    fontSize: 22,
    fontWeight: '700',
    textAlignVertical: 'center',
    textAlign: 'center',
    color: theme.white
  }
});