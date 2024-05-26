import React from "react"
import { View, Text, TouchableNativeFeedback , StyleSheet} from "react-native"
import { theme } from "../themes"

export const Modal = ({ description, setViewModal }: { description: string, setViewModal: React.Dispatch<React.SetStateAction<boolean>> }) => {

  return (
    <View style={ styles.container }>
        
        <Text style={ styles.text }>{ description }</Text>

        <View style={ styles.button }>
            <TouchableNativeFeedback
                onPress={() => setViewModal( false )}>
    
                <Text style={{ ...styles.text, color: theme.white }}>Cerrar</Text>                
    
            </TouchableNativeFeedback>
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
