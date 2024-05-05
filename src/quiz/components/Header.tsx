import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../util/themes/Theme";

// Componente para la barra de titulo de la pantalla del Home.
export const Header = (): JSX.Element => {

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
        backgroundColor: colors.primary,
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30, 
      },
    text: {
        marginVertical: 5,
        fontSize: 32,
        fontWeight: '800',
        fontFamily: 'System',
        color: colors.textPrimary,
    }
})
