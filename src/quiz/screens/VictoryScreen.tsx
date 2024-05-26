import { View, Text, Image, StyleSheet } from "react-native"
import { theme, useImage } from "../../util";
import { VictoryCard, VictoryButtons } from "../components";



export const VictoryScreen = () => {

   // Utilizamos un hook personalizado llamado useImage para obtener una imagen.
  // En este caso, estamos obteniendo la imagen del 'trofeo' del 'uiIcon'.
  const image = useImage('trofeo', 'uiIcon');
  
  return (
    // Este es el contenedor principal de la pantalla de victoria.
    <View style={ styles.container }>

      {/** Componente contenedor de la imagen */}
      <View style={ styles.img }>
        <Image source={ image }/>
      </View>

      {/** Componente contenedor del texto */}
      <View style={{ width: '100%', margin: '5%', flex: 0.5}}>
        {/* Este es el texto de felicitación. */}
        <Text style={ styles.header }>¡Felicitaciones!</Text>
          
        {/* Este es el texto de quiz completado. */}
        <Text style={ styles.subHeader }>Quiz Completado</Text>
      </View>
      
      {/** Componenete contenedor del score final */}
      <VictoryCard/> 
      {/** Componente Contenedor de los botones */}
      <VictoryButtons /> 
    </View>
  )
}

// Estilos del componente
const basic = StyleSheet.create({
    text: {
      textAlign: 'center',
      fontFamily: 'Rubik', 
      fontWeight: '700',
    }
  });

const styles = StyleSheet.create({
  container: {
    display: 'flex', 
    height: '100%', 
    alignItems: 'center',
    backgroundColor: theme.brown_base
  },
  img: {
    marginTop: '25%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: 32,
    color: theme.brown_clay,
    ...basic.text
  }, 
  subHeader: {
    fontSize: 22,
    color: theme.brown_dark,
    ...basic.text
  }
})