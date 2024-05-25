import { View, Text, StyleSheet } from "react-native";
import { ProfileScoreProps } from "../../types/PropsTypes";
import { theme } from "../../../util";



// Componente que contiene la puntuacion y tiempo del jugador.
export const ProfileScore = ({record, text}: ProfileScoreProps): JSX.Element => {

    return (
        // Contenedor de la vista del score
        <View style={ styles.subContainer }>

            {/* Texto superior de la vista */}
            <Text style={ styles.text }>
                { text }
            </Text>
            
            {/* Texto inferior de la vista */}
            <Text style={ styles.text2 }>
                { record }
            </Text>

        </View>
    );
}


// Estilos del componente 
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontFamily: 'Rubik',
        fontWeight: '700',
        color: theme.brown_veryDark,
        textAlignVertical: 'bottom'
    },
    text2: {
        fontSize: 48,
        fontFamily: 'Rubik',
        fontWeight: '900',
        color: theme.white,
        textAlignVertical: 'top'    
    },
    subContainer: {
        flex: 1,
        marginLeft: '10%',
        flexDirection: 'column'
    },
})