import { Image, TouchableNativeFeedback, StyleSheet, View } from "react-native";
import { useIconChange, useImage } from '../hooks';
import { useNavigate } from "react-router-native";
import { NavButtonProps } from "../types";



export const NavButton = ( { type, icon1, icon2 }: NavButtonProps ) => {

  // Hook para manejar la navegacion del tipo: 'back-arrow'. 
  const navigate = useNavigate();

  // Custom hook para manejar el cambio de tema y iconos.
  const { icon, setIcon, selectIcon, selectionTheme } = useIconChange( icon1, icon2 ); 

  // Hook para extraer la imagen del icono.
  const image = useImage( icon , 'uiIcon');

  // Funcion onclick que establece la accion.
  const onClick = () => {
    if( type === 'theme' ) {
      selectionTheme();
      setIcon( selectIcon );
    
    } else if( type === 'back-arrow' ) {
      navigate('/home', { replace: true });
    }
  }

  return (
    <View style={ styles.icon }>
      <TouchableNativeFeedback
          onPress={ onClick }>
          <Image
              source={ image }
              style={{ width: 24, height: 24}}>
          </Image>
      </TouchableNativeFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    height: 48,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
