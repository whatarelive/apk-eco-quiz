import { View, Text, StyleSheet } from "react-native";
import { ProfileScoreProps } from "../../types/PropsTypes";



// Componente que contiene la puntuacion y tiempo del jugador.
export const ProfileScore = ({record, text}: ProfileScoreProps): JSX.Element => {

    return (
        // Contenedor de la vista del score
        <View style={ styles.subContainer }>

            {/* Texto superior de la vista */}
            <Text style={{ 
                    ...styles.text, 
                    textAlignVertical: 'bottom', 
                    fontSize: 14 }}>
                { text }
            </Text>
            
            {/* Texto inferior de la vista */}
            <Text style={{ 
                    ...styles.text, 
                    textAlignVertical: 'top', 
                    fontSize: 16 }}>
                { record }
            </Text>

        </View>
    );
}


// Estilos del componente 
const styles = StyleSheet.create({
    text: {
        flex: 1,
        position: 'relative',
        textAlign: 'center',
        width: '100%',
        height: '50%',
        color: '#e9ffe6',
        fontFamily: 'System',
        fontWeight: 'bold'
    },
    subContainer: {
        width: '65%',
        flexDirection: 'column'
    },
})