import { View, Text, TouchableNativeFeedback , StyleSheet} from "react-native"
import { useContext } from 'react';
import { theme } from "../../../util/themes"
import { NextQuizContext } from "../../context";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';



export const RefModal = ({ description }: { description: string }) => {

   const { setViewModal } = useContext( NextQuizContext );

  return (
    <View style={ styles.container }>
        <View style={ styles.background }></View>
        <View style={ styles.modal }>
            <Text style={{ ...styles.text, color: theme.green_veryDark }}>{ description }</Text>
            <View style={ styles.button }>
                <TouchableNativeFeedback
                    onPress={() => setViewModal( false )}>
                    <Text style={{ ...styles.text, color: theme.white }}>Cerrar</Text>                
                </TouchableNativeFeedback>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute', 
        width: '100%', 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'center', 
    },
    background: {
        width: '100%', 
        height: '100%', 
        backgroundColor: theme.black,
        opacity: 0.8, 
    },
    modal:{
        position: 'absolute', 
        width: '80%', 
        height: '40%', 
        padding: RFPercentage(3), 
        alignItems: 'center', 
        justifyContent: 'space-between',
        borderWidth: 4, 
        borderRadius: RFValue(16), 
        borderColor: theme.green_base,
        backgroundColor: theme.green_light,
    },
    text: {
        textAlign: 'center',
        fontSize: RFValue(18), 
        fontFamily: 'Rubik',
    },
    button: {
        width: '60%', 
        height: RFPercentage(5),
        justifyContent: 'center',
        borderRadius: RFValue(20),
        backgroundColor: theme.green_base
    }
})
