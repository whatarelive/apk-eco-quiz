import { View, Text, StyleSheet } from "react-native";
import { primaryTheme } from "../themes/Theme";

// Componente para la barra de titulo de la pantalla del Home.
export const Header = () => {

  return (
    // Contenedor de la vista.
    <View style={ style.container }>
        
        {/* Texto de la barra */}
        <Text style={ style.text }>
            Quiz App
        </Text>

    </View>
  )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flex: 1,
        position: 'relative',
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: primaryTheme.colors.acent,
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30, 
      },
    text: {
        marginVertical: 5,
        fontSize: 32,
        fontWeight: '800',
        fontFamily: primaryTheme.fonts.main,
        color: primaryTheme.colors.textPrimary,
    }
})
