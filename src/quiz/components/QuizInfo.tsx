import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { theme } from "../../util";
import { QuizInfoProps } from "../types";



// Recibe un objeto de propiedades que contiene un id.
export const QuizInfo = ({ id, } : QuizInfoProps ): JSX.Element => {
  
  // Se declara un estado llamado porciento con un valor inicial de 0.
  const [ porciento, setPorciento ] = useState( 0 );

  // Se utiliza el hook useEffect para realizar una acción después de que el componente se haya renderizado.
  // En este caso, se calcula un porcentaje basado en el id y se establece el estado de porciento.
  useEffect(() => {
    // Se calcula el porcentaje y se establece el estado de porciento.
    setPorciento( (id * 100) / 5 )
  }, [ id ]) // Este efecto se ejecuta cada vez que el id cambia.


  return (
    // Este es un contenedor principal.
    <View style={ styles.container }> 
      {/* Este es un contenedor para la barra de progreso*/}
      <View style={ styles.barra }>
        {/* Este es el componente de la barra de progreso. */}
        {/* Su ancho se establece en función del estado de porciento. */}
        <View 
          style={{ ...styles.progreso, width: `${porciento}%` }}>
        </View>
      </View>

      {/* Este es un contenedor para los textos. */}
      <View style={ styles.text_container }>
        {/* Este es el texto que muestra el id . */}
        <Text style={{ ...styles.text, color: theme.green_base }}>{ id }</Text>
        {/* Este es el texto que muestra el total de preguntas (5) */}
        <Text style={{ ...styles.text, color: theme.brown_clay }}>/5</Text>
      </View>
    </View>
  )
}

// Estilos del componente
const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 22,
      marginBottom: '2%',
      maxHeight: '10%'
    },
    barra: {
      width: '100%',
      height: 12,
      borderRadius: 20,
      backgroundColor: theme.brown_base,
    },
    progreso: {
      flex: 1,
      borderRadius: 20,
      backgroundColor: theme.green_base
    },
    text_container: {
      flexDirection: 'row',
      marginLeft: 10,
    },
    text: {
      fontSize: 18,
      fontWeight: '600'
    }
});
