import { View, StyleSheet } from "react-native"
import { QuizResponseListProps } from "../../types"
import { QuizResponse } from "./QuizResponse"


// Recibe un arreglo de objetos que contiene todas las respuestas.
export const QuizListResponse = ({ respuestas }: QuizResponseListProps ): JSX.Element => {

  // Se retorna una lista de componentes con las respuestas.
  return (
    <View style={ styles.response }>
      {
        respuestas.map( (resp, index) => 
          <QuizResponse key={ index } resp={ resp }/> 
        )
      }
    </View>
  )
}

// Estilos del componente.
const styles = StyleSheet.create({
  response: {
    width: '100%',
    alignSelf: 'center',
    paddingVertical: 10,
    flexDirection: 'column',
  }
})