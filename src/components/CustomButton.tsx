import { View, Text, TouchableNativeFeedback, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";
import { primaryTheme } from "../themes/Theme";

// TODO: falta la funcionalida de mandar al contexto la categoria aleatoria. 
export const CustomButton = ({title}: {title : string}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/quiz', {replace: true});
  }

  return (
    <View style={ styles.container }>
        <TouchableNativeFeedback
          onPress={ handleClick }>
            
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
    backgroundColor: primaryTheme.colors.primary,
    width: '80%',
    height: 50,
    borderRadius: 40,
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    fontWeight: '700',
    color: primaryTheme.colors.textPrimary,
    fontSize: primaryTheme.fontSize.subHeading
  }
});