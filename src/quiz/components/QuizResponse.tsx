import { Text, View, Image, TouchableNativeFeedback, StyleSheet, Alert } from "react-native";
import { align, colors } from "../../util";



export const QuizResponse = () => {
  return (
    <View style={ styles.container }>
        <TouchableNativeFeedback
            onPress={() => Alert.alert('Respuesta B')}>
            <Text style={{}}>Respuesta B</Text>
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
    }
});