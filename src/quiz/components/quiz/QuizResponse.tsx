import { Text, View, Image, TouchableNativeFeedback, StyleSheet } from "react-native";
import { QuizResponseProps } from "../../types";
import { theme, useImage } from "../../../util";
import { NextQuizContext } from "../../context";
import { useContext, useEffect } from 'react';
import { useStyle } from "../../hooks/useStyle";


const RefButton = () => {

  const image = useImage('eyes', 'uiImage');

  return (
    <View style={{ width: 140, height: 20, margin: 5 }}>
      <TouchableNativeFeedback
        onPress={() => {}}
      >
        <View style={{ flexDirection: 'row' }}>
          <Image style={{ width: 16, height: 18 }} source={ image }/>
          <Text style={{ fontSize: 14, fontFamily: 'Rubik' , marginStart: 10, fontWeight: '900'}}>Ver Explicacion</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}


// Recibe un objeto de propiedades que contiene una respuesta (resp).
export const QuizResponse = ( { resp, correct }: QuizResponseProps ) => {

  // Utilizamos el hook useContext para obtener el estado y la función de actualización del contexto NextQuizContext.
  const { active, status, setActive } = useContext( NextQuizContext );

  const condicion = active.blocked && status && resp.value === correct && resp.id !== active.refId;

  const { selectStyle, setColor, image } = useStyle( resp, condicion );
  
  // Esta es una función que maneja el evento de clic.
  // Actualiza el estado activo dependiendo de si está bloqueado o no.
  const handleClick = ( id: string ) => {
    // Si el estado activo está bloqueado, actualizamos el refId en el estado activo.
    if( active.blocked === true ) {
      setActive({
        ...active, 
        refId: id,
      });  
    }
    
    // Independientemente de si el estado activo está bloqueado o no, actualizamos el estado activo.
    else setActive({
        ...active,
        enable: true,
        blocked: true,
        refId: id,
      });
    }

    useEffect(() => {
      if ( active.refId === resp.id && resp.value !== correct ) {
        setColor('red')
      }
        
      return () => setColor('')
    }, [ status ])


  return (
    // Este es un componente TouchableNativeFeedback que maneja el evento de presión.
    // Cuando se presiona, se llama a la función handleClick con el id de la respuesta.
    <TouchableNativeFeedback
      onPress={()=> !status && handleClick( resp.id ) }>
        
        <View style={{ ...styles.container, ...selectStyle }}>
          {/* Este es un contenedor con un estilo que se determina llamando a la función beforeStyle. */}
          <View style={{ flex: 1, flexDirection: 'column' }}>
        
            {/* Este es el texto que muestra el valor de la respuesta. */}
            <Text style={ styles.text }>{ resp.value }</Text>

            {
              status && condicion ? <RefButton/> : <></>
            }
          </View>

          <View style={{ margin: 10}}>
            <Image source={ image }/>
          </View>
        
        </View>
    </TouchableNativeFeedback>
  )
}

// Estilos del componente
const styles = StyleSheet.create({
    container: {
      minHeight: 95,
      maxHeight: 110,
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 24,
      marginVertical: 12, 
      paddingHorizontal: 10,
      borderRadius: 16,
      borderWidth: 4,
      borderColor: theme.brown_lightDark,
    },
    text: {
      display: 'flex',
      fontSize: 18,
      fontFamily: 'Rubik',
      fontWeight: '800',
      alignItems: 'center',
      color: theme.white
    }
});