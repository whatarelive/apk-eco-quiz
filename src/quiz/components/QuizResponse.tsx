import { Text, View, TouchableNativeFeedback, StyleSheet, Alert } from "react-native";
import { QuizResponseProps } from "../types";
import { theme } from "../../util";
//import { useState } from "react";



export const QuizResponse = ( { resp }: QuizResponseProps ) => {

  return (
    <View style={ styles.container }>
      <TouchableNativeFeedback
          onPress={() => Alert.alert('Respuesta B')}>
          <Text style={ styles.text }>{ resp.value }</Text>
      </TouchableNativeFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      padding: '5%',
      borderRadius: 15,
      backgroundColor: theme.brown_clay,
    },
    text: {
      flex: 1,
      fontSize: 18,
      fontWeight: '500',
      textAlign: 'left',
      color: theme.white
    }
});