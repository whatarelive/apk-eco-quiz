import { View, Text, TouchableNativeFeedback , StyleSheet} from "react-native"
import { useContext } from 'react';
import { theme } from "../../../util/themes"
import { NextQuizContext } from "../../context";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { StyleText } from "../../../util";



export const RefModal = ({ description }: { description: string }) => {

   const { setViewModal } = useContext( NextQuizContext );

  return (
    <View style={ styles.container }>
        <View style={ styles.background }></View>
        <View style={ styles.modal }>
            <View style={{ flex: 1 ,justifyContent: 'center',}}>
                <StyleText size={ 18 } color={ theme.brown_dark }>Explicación</StyleText>
            </View>
            <View style={{ flex: 5, justifyContent: 'center', padding: RFValue(8), margin: RFValue(15)}}>
                <Text style={{ ...styles.text, color: theme.green_veryDark }}>{ description }</Text>
            </View>
            <View style={{ flexDirection: 'row'}}>

                <View style={ styles.button }>
                    <TouchableNativeFeedback
                        onPress={() => setViewModal( false )}>
                        <Text style={{ ...styles.text, color: theme.white }}>Cerrar</Text>                
                    </TouchableNativeFeedback>
                </View>
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
        opacity: 0.5, 
    },
    modal:{
        position: 'absolute', 
        width: '80%', 
        alignItems: 'center',
        borderRadius: RFValue(16), 
        backgroundColor: theme.brown_base,
    },
    text: {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: RFValue(15), 
        fontFamily: 'Rubik',
    },
    button: {
        flex: 1, 
        height: RFPercentage(6),
        justifyContent: 'center',
        borderBottomLeftRadius: RFValue(16),
        borderBottomRightRadius: RFValue(16),
        backgroundColor: theme.green_base
    }
})
