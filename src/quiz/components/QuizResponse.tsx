import { Text, View, TouchableNativeFeedback, StyleSheet, Alert } from "react-native";
import { QuizResponseProps } from "../types";
import { align } from "../../util";



export const QuizResponse = ( { resp }: QuizResponseProps ) => {
  return (
    <View style={ styles.container }>
        <TouchableNativeFeedback
            onPress={() => Alert.alert('Respuesta B')}>
            <Text style={{}}>{resp}</Text>
        </TouchableNativeFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        ...align.relative,
        height: '20%',
        backgroundColor: '#785',
        margin: 10
    },
    text: {
      
    }
});