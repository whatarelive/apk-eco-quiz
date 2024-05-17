import { View, StyleSheet } from "react-native"
import { Respuesta } from "../types"
import { QuizResponse } from "./QuizResponse"



export const QuizListResponse = ({ respuestas }: { respuestas: Respuesta[] }) => {

  return (
    <View style={ styles.response }>
        {
          respuestas.map( resp => <QuizResponse key={ resp.id } resp={ resp }/> )
        }
    </View>
  )
}

const styles = StyleSheet.create({
  response: {
    width: '100%',
    alignSelf: 'center',
    paddingVertical: 10,
    flexDirection: 'column',
  }
})