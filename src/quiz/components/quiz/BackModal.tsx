import { View, Text, TouchableNativeFeedback, StyleSheet } from "react-native"
import { useContext } from "react"
import { useNavigate } from "react-router-native"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import { theme } from "../../../util"
import { NextQuizContext, ScoreContext } from "../../context"



export const BackModal = () => {

  const { status, active, setActive, setViewBackModal, setStatus } = useContext( NextQuizContext );
  const { resetEvery } = useContext( ScoreContext );

  const navigate = useNavigate();

  const onAcept = () => {
    resetEvery();

    if ( status ) setStatus( false );

    setActive({
      ...active,
      enable: false,
      blocked: false,
      refId: '',
    }); 
    
    setViewBackModal( false );
    navigate('/home', { replace: true });
  }

  const onCancel = () => setViewBackModal( false );
    
  return (
    <View style={ styles.container }>
      <View style={ styles.background }></View>
        
      <View style={ styles.modal }>
        <View style={{ flex: 2, justifyContent: 'center'}}>
          <Text style={{ ...styles.text, color: theme.brown_dark }}>Se perdera el progreso actual</Text>
        </View>
            
        <View style={{ flexDirection: 'row' }}>
          <View style={ styles.button }>
            <TouchableNativeFeedback
                onPress={ onAcept }>
              <Text style={{ ...styles.text, color: theme.white }}>Aceptar</Text>                
            </TouchableNativeFeedback>
          </View>
          
          <View style={ styles.button2 }>
            <TouchableNativeFeedback
                onPress={ onCancel }>
              <Text style={{ ...styles.text, color: theme.white }}>Cancelar</Text>                
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
      height: '20%',
      alignItems: 'center',
      borderRadius: RFValue(16), 
      backgroundColor: theme.brown_base,
    },
    text: {
      textAlign: 'center',
      fontSize: RFValue(14),
      fontWeight: 'bold', 
      fontFamily: 'Rubik',
    },
    button: {
      flex: 1, 
      height: RFPercentage(5),
      justifyContent: 'center',
      borderBottomLeftRadius: RFValue(16),
      backgroundColor: theme.green_base
    },

    button2: {
      flex: 1,
      height: RFPercentage(5),
      justifyContent: 'center',
      borderBottomRightRadius: RFValue(16),
      backgroundColor: theme.salmon_dark
    }
})

