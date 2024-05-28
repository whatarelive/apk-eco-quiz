import { Image, TouchableNativeFeedback, StyleSheet, View } from "react-native";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-native";
import { useImage } from '../hooks';
import { NextQuizContext } from "../../quiz/context";
import { theme } from "../themes";
import { RFValue } from 'react-native-responsive-fontsize';




export const NavButton = (): JSX.Element => {

  // Hook para manejar la navegacion del tipo: 'back-arrow'. 
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Acceso al contexto para manejar las acciones del compponente.
  const { setViewBackModal } = useContext( NextQuizContext );

  // Hook para extraer la imagen del icono.
  const image = useImage( 'flecha', 'uiIcon' );

  // Funcion onclick que establece la accion.
  const onClick = () => {
    if ( pathname.includes('quiz') ) {
      setViewBackModal( true );
    } else {
      navigate('/home', { replace: true });
    }
  }

  return (
    <View style={ styles.icon }>
      <TouchableNativeFeedback
          background={ TouchableNativeFeedback.Ripple( theme.brown_base, false )}
          onPress={ onClick }>
          <Image
              source={ image }
              style={{ width: RFValue(18), height: RFValue(18)}}>
          </Image>
      </TouchableNativeFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    height: RFValue(34),
    width: RFValue(34),
    alignItems: 'center',
    justifyContent: 'center',
  }
})
