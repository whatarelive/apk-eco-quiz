import { Text, View, StyleSheet } from "react-native";
import { theme } from "../../../util";
import { QuizHeaderProps } from "../../types";
import { NavButton } from "./NavButton";



// Recibe un objeto de propiedades que contiene un título.
export const QuizHeader = ( { title }: QuizHeaderProps ): JSX.Element => {

    return (
        // Este es un contenedor principal con un estilo específico.
        <View style={styles.container}>
            {/* Este es el componente NavButton que representa un botón de navegación hacia atrás. */}
            <NavButton type={"back-arrow"} icon1={"flecha"} icon2={"flecha"}/>

            {/* Este es el texto que muestra el título del quiz. */}
            <Text style={styles.text}>{`${title} - Quiz`}</Text>

            {/* Este es otro componente NavButton que representa un botón para cambiar el tema. */}
            <NavButton type={"theme"} icon1={"luna"} icon2={"sun"}/>
        </View>
    )
}


// Estilos del componente
const styles = StyleSheet.create({
    container: {
        height: '8%',
        marginBottom: '5%',
        paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: theme.brown_ligt,
    },
    text: {
        flex: 1,
        fontSize: 22,
        fontFamily: 'Rubik',
        textAlign: 'center',
        fontWeight: '700',
        color: theme.brown_veryDark,
    }
})
