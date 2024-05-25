import { Text, View, TouchableNativeFeedback, StyleSheet } from "react-native";
import { QuizResponseProps } from "../../types";
import { theme } from "../../../util";
import { NextQuizContext } from "../../context";
import { useContext, useEffect, useState } from 'react';



// Recibe un objeto de propiedades que contiene una respuesta (resp).
export const QuizResponse = ( { resp, correct }: QuizResponseProps ) => {

  // Utilizamos el hook useContext para obtener el estado y la función de actualización del contexto NextQuizContext.
  const { active, status, setActive } = useContext( NextQuizContext );
  const [ color, setColor ] = useState('');
  
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
    
    // Esta es una función que devuelve un objeto de estilo dependiendo del estado activo y del id de la respuesta.
    const beforeStyle = {
      backgroundColor: (resp.id !== active.refId ? theme.brown_clay : ( active.enable ? theme.green_base: theme.brown_clay )),
      borderColor: (resp.id !== active.refId ? theme.brown_lightDark : ( active.enable ? theme.green_dark: theme.brown_lightDark ))
    }
    
    const responseStyle = {
      backgroundColor: theme.salmon_light,
      borderColor: theme.salmon_dark
    }
    
    const correctRespStyle = {
      backgroundColor: theme.green_base,
      borderColor: theme.green_dark
    }
    
    const conditionalStyle = (color !== 'red') ? beforeStyle : responseStyle
    
    const selectStyle = ( active.blocked && status && resp.value === correct && resp.id !== active.refId ) 
    ? correctRespStyle 
    : conditionalStyle; 
    

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
        
        {/* Este es un contenedor con un estilo que se determina llamando a la función beforeStyle. */}
        <View style={{ ...styles.container, ...selectStyle }}>
        
          {/* Este es el texto que muestra el valor de la respuesta. */}
          <Text style={ styles.text }>{ resp.value }</Text>
        
        </View>

    </TouchableNativeFeedback>
  )
}

// Estilos del componente
const styles = StyleSheet.create({
    container: {
      display: 'flex',
      minHeight: 95,
      maxHeight: 95,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 24,
      marginVertical: 12, 
      paddingHorizontal: 10,
      borderRadius: 16,
      borderWidth: 4,
      borderColor: theme.brown_lightDark,
    },
    text: {
      flex: 1,
      display: 'flex',
      fontSize: 18,
      fontFamily: 'Rubik',
      fontWeight: '800',
      alignItems: 'center',
      color: theme.white
    }
});