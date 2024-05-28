import { View, Text, Image, StyleSheet } from "react-native"
import { theme, useDimensions, useImage } from "../../util";
import { VictoryCard, CustomButton } from "../components";
import { useNavigate } from "react-router-native";
import { useContext } from "react";
import { ScoreContext } from "../context";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";



export const VictoryScreen = () => {
  
    const navigate = useNavigate();
    const { resetEvery } = useContext( ScoreContext );

    // Utilizamos un hook personalizado llamado useImage para obtener una imagen.
    // En este caso, estamos obteniendo la imagen del 'trofeo' del 'uiIcon'.
    const image = useImage('trofeo', 'uiIcon');

    useDimensions

    const handleClick = () => {
      resetEvery();
      navigate('/home');
    }
  
  return (
    <View style={ styles.container }>
      {/** Componente contenedor de la imagen */}
      <View style={ styles.img_container }>
        <Image style={ styles.img } source={ image }/>
      </View>

      {/** Componente contenedor del texto */}
      <View style={{ width: '100%', margin: '5%', flex: 0.5}}>
        <Text style={ styles.header }>¡Felicitaciones!</Text>
        <Text style={ styles.subHeader }>Quiz Completado</Text>
      </View>

      {/** Componenete contenedor del score final */}
      <VictoryCard/> 
      
      {/** Componente Contenedor de los botones */}
      <View style={ styles.button_Container }>
        <CustomButton title="Volver" icon={"exit"} handleClick={handleClick} color={ theme.brown_veryDark }/>
      </View> 

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
  img_container: {
    marginTop: RFPercentage(12),
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: RFValue(220),
    height: RFValue(220),
  },
  header: {
    fontSize: RFValue(32),
    color: theme.brown_clay,
    ...basic.text
  }, 
  subHeader: {
    fontSize: RFValue(22),
    color: theme.brown_dark,
    ...basic.text
  },
   button_Container: {
    flex: 1,
    width: '40%', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
  }
})