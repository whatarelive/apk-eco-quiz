import { Image, TouchableNativeFeedback, StyleSheet } from "react-native";
import { useImage } from "../hooks/useImage";
import { useRef, useState } from "react";



export const NavThemeButton = () => {

  // Se guarda la referencia del tema seleccionado.
  const tema = useRef('black');

  // Funcion que permite seleccionar el icono en funcion del tema.
  const selectIcon = () => tema.current === 'ligth' ? 'luna' : 'sun';

  // Estado para realizar el cambio de icono cuando se cambie el tema.
  const [ icon, setIcon ] = useState( selectIcon );

  // Hook para extraer la imagen del icono.
  const image = useImage( icon , 'uiIcon');

  // Funcion onclick que establece el nuevo tema.
  const onClick = () => {
    // Se actualiza la refencia al nuevo tema seleccionado
    tema.current = tema.current === 'ligth' ? 'black' : 'ligth';
    // Se actualiza el estado.
    setIcon( selectIcon );
  }

  return (
    <>
      <TouchableNativeFeedback
          onPress={ onClick }>
          <Image
              source={ image }
              style={ styles.icon }>
          </Image>
      </TouchableNativeFeedback>
    </>
  )
}

const styles = StyleSheet.create({
  icon: {
    maxWidth: '8%',
    maxHeight: '35%',
    marginHorizontal: '3%',
  }
})
