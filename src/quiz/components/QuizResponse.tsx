import { Text, View, TouchableNativeFeedback, StyleSheet, Alert } from "react-native";
import { QuizResponseProps } from "../types";
import { theme } from "../../util";



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
      display: 'flex',
      minHeight: 85,
      maxHeight: 85,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 24,
      marginVertical: 12, 
      paddingHorizontal: 10,
      borderRadius: 16,
      borderWidth: 4,
      borderColor: theme.brown_lightDark,
      backgroundColor: theme.brown_clay,
    },
    text: {
      flex: 1,
      display: 'flex',
      fontSize: 15,
      fontFamily: 'Rubik',
      fontWeight: '800',
      alignItems: 'center',
      color: theme.white
    }
});