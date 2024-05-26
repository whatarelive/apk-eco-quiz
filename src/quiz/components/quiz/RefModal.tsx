import { View, Text, TouchableNativeFeedback , StyleSheet} from "react-native"
import { useContext } from 'react';
import { theme } from "../../../util/themes"
import { NextQuizContext } from "../../context";



export const RefModal = ({ description }: { description: string }) => {

   const { setViewModal } = useContext( NextQuizContext );

  return (
    <View style={{position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{width: '100%', height: '100%', opacity: 0.7, backgroundColor: theme.black}}></View>
        <View style={ styles.container }>
            
            <Text style={ styles.text }>{ description }</Text>

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
    container:{
        width: '80%', 
        height: '40%', 
        position: 'absolute',
        alignSelf: 'center',
        padding: '10%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.green_light,
        borderWidth: 5,
        borderRadius: 20,
        borderColor: theme.green_base,
        opacity: 100
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Rubik'
    },
    button: {
        width: '60%',
        height: '15%',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: theme.green_base
    }
})
