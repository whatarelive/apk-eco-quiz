import { View, Text, TouchableNativeFeedback, StyleSheet } from "react-native";
import { colors, fontSize } from "../../util";
import { CustomButtonProps } from "../types";



export const CustomButton = ( { title, handleClick }: CustomButtonProps ): JSX.Element => {

  return (
    <View style={ styles.container }>
        <TouchableNativeFeedback
          onPress={ () => handleClick() }>
            
            <Text 
              style={ styles.text }>
              { title }
            </Text>
        
        </TouchableNativeFeedback>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 50,
    position: 'relative',
    marginBottom: '5%',
    borderRadius: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  text: {
    textAlign: 'center',
    fontWeight: '700',
    color: colors.textPrimary,
    fontSize: fontSize.subHeading
  }
});