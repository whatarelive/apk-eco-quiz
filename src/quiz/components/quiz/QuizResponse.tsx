import { Text, View, Image, TouchableNativeFeedback, StyleSheet } from "react-native";
import { QuizResponseProps } from "../../types";
import { theme } from "../../../util";
import { NextQuizContext } from "../../context";
import { useContext, useEffect } from 'react';
import { useStyle } from "../../hooks/useStyle";
import { RefButton } from "./RefButton";



// Recibe un objeto de propiedades que contiene una respuesta (resp).
export const QuizResponse = ( { resp, correct }: QuizResponseProps ): JSX.Element => {

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
      if ( active.refId === resp.id && resp.value === correct ) {
        setColor('green')
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
              status && condicion ? <RefButton /> : <></>
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
      height: '18%',
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 24,
      marginVertical: '3%', 
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