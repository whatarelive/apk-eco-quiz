import { View, Text, TouchableNativeFeedback, Alert } from "react-native";

// TODO: faltan los estilos, hacer la funcionalidad del boton ,etc.
export const StyleSheetButton = () => {


  return (
    <View>
        <TouchableNativeFeedback
          onPress={() => Alert.alert('El Juego ha comenzado')}>
              <View>
                <Text>Comenzar Juego</Text>
              </View>
        </TouchableNativeFeedback>
    </View>
  )
}
