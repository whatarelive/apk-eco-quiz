import { Text, View, TouchableNativeFeedback, StyleSheet, Alert } from "react-native";
import { QuizResponseProps } from "../types";
import { align, colors } from "../../util";
import { useState } from "react";



export const QuizResponse = ( { resp }: QuizResponseProps ) => {

   const [first, setfirst] = useState();


  return (
    <View style={ styles.container }>

      <View style={ styles.signo }>
        <Text style={ styles.textId }>{ resp.id }</Text>
      </View>

      <TouchableNativeFeedback
          onPress={() => Alert.alert('Respuesta B')}>
          <Text style={ styles.text }>{ resp.value }</Text>
      </TouchableNativeFeedback>
   
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        ...align.relative,
        flexDirection: 'row',
        height: '20%',
        margin: 10,
        borderWidth: 5,
        borderRadius: 30,
        borderColor: colors.acent
    },
    signo: {
      borderRadius: 20,
      margin: 3,
      backgroundColor: colors.primary,
      paddingHorizontal: 15,
      paddingVertical: 2,
      justifyContent: 'center',
      alignSelf: 'stretch',
    },
    text: {
      flex: 1,
      fontSize: 16,
      textAlign: 'center',
    },
    textId: {
      color: colors.textPrimary,
      fontSize: 40
    }
});