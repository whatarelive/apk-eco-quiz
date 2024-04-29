import { View, Text, StyleSheet } from "react-native";

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
        backgroundColor: '#0ca907',
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30, 
      },
    text: {
        flexBasis: 'auto',
        marginVertical: 5,
        color: '#e9ffe6',
        fontSize: 32,
        fontFamily: 'Roboto',
        fontWeight: '600'
    }
})
