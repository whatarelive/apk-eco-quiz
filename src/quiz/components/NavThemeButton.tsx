import { Image, TouchableNativeFeedback, StyleSheet } from "react-native";
import { useImage } from "../hooks/useImage";
import { useIconChange } from "../hooks/useIconChange";



export const NavThemeButton = () => {

  const { icon, setIcon, selectIcon, selectionTheme } = useIconChange('luna', 'sun'); 

  // Hook para extraer la imagen del icono.
  const image = useImage( icon , 'uiIcon');

  // Funcion onclick que establece el nuevo tema.
  const onClick = () => {
    selectionTheme();
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
