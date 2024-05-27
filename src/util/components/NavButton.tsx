import { Image, TouchableNativeFeedback, StyleSheet, View } from "react-native";
import { useContext } from "react";
import { useNavigate } from "react-router-native";
import { useImage } from '../hooks';
import { NextQuizContext } from "../../quiz/context";
import { theme } from "../themes";
import { RFValue } from 'react-native-responsive-fontsize';




export const NavButton = (): JSX.Element => {

  // Hook para manejar la navegacion del tipo: 'back-arrow'. 
  const navigate = useNavigate();

  // Acceso al contexto para manejar las acciones del compponente.
  const { active, setActive } = useContext( NextQuizContext );

  // Hook para extraer la imagen del icono.
  const image = useImage( 'flecha', 'uiIcon' );

  // Funcion onclick que establece la accion.
  const onClick = () => {

      setActive({
        ...active,
        enable: false,
        blocked: false,
        refId: '',
      }); 
      
    navigate('/home', { replace: true });
  }

  return (
    <View style={ styles.icon }>
      <TouchableNativeFeedback
          background={ TouchableNativeFeedback.Ripple( theme.brown_base, false )}
          onPress={ onClick }>
          <Image
              source={ image }
              style={{ width: RFValue(20), height: RFValue(20)}}>
          </Image>
      </TouchableNativeFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    height: RFValue(38),
    width: RFValue(38),
    alignItems: 'center',
    justifyContent: 'center',
  }
})
