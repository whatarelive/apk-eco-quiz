import { View, Text, StyleSheet } from "react-native";
import { colors, align } from "../../util";



// Componente para la barra de titulo de la pantalla del Home.
export const Header = (): JSX.Element => {

  return (
    <View style={ style.container }>
        <Text style={ style.text }>
            Quiz App
        </Text>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '8%',
        marginBottom: '5%',
        backgroundColor: colors.primary,
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30, 
        ...align.relative
      },
    text: {
        fontSize: 32,
        fontWeight: '800',
        fontFamily: 'System',
        color: colors.textPrimary,
    }
})
