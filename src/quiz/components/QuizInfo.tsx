import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { theme } from "../../util";
import { QuizInfoProps } from "../types";



export const QuizInfo = ({ id, } : QuizInfoProps ): JSX.Element => {

  const [ porciento, setPorciento ] = useState( 0 );

  useEffect(() => {
    setPorciento( (id * 100) / 5 )

  }, [ id ])
  

  return (
    <View style={ styles.container }> 
      <View style={ styles.barra }>
        <View 
          style={{ ...styles.progreso, width: `${porciento}%` }}>
        </View>
      </View>

      <View style={ styles.text_container }>
        <Text style={{ ...styles.text, color: theme.green_base }}>{ id }</Text>
        <Text style={{ ...styles.text, color: theme.brown_clay }}>/5</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 22,
      marginBottom: '2%',
      maxHeight: '10%'
    },
    barra: {
      width: '100%',
      height: '20%',
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
      fontSize: 16,
      fontWeight: '500'
    }
});