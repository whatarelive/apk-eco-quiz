import { Text, View, StyleSheet } from "react-native";
import { useLocation } from "react-router-native";
import { NavButton } from "./NavButton";
import { theme } from "../themes";
import { HeaderProps } from '../interfaces/Props';



// Recibe un objeto de propiedades que contiene un título.
export const Header = ( { title }: HeaderProps ): JSX.Element => {

    // Estraemos la ubicacion por el url actual.
    const { pathname } = useLocation();

    // Titulo del Header segun la ubicacion.
    const newTitle = title + ( pathname !== '/home' ? '- Quiz' : '' );

    //Este es el componente NavButton que representa un botón de navegación hacia atrás segun la ubicacion. 
    const NavIzqElement = () => pathname !== '/home' ? <NavButton /> : <></>
    const NavDrchElement = () => pathname !== '/home' && <View style={{ width: 48 }}></View>

    return (
        // Este es un contenedor principal con un estilo específico.
        <View style={styles.container}>
            <NavIzqElement />

            {/* Este es el texto que muestra el título del quiz. */}
            <Text style={styles.text}>{ newTitle }</Text>

            <NavDrchElement/>
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
