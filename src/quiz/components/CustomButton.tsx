import { View, Text,Image, TouchableNativeFeedback, StyleSheet } from "react-native";
import { theme } from "../../util";
import { CustomButtonProps } from "../types";
import { useIconChange, useImage } from "../hooks";



export const CustomButton = ( { title, icon1, icon2, color, handleClick }: CustomButtonProps ) => {

  const { icon } = useIconChange( icon1, icon2 );
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