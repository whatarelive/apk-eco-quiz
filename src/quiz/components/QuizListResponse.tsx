import { View, StyleSheet } from "react-native"
import { Respuesta } from "../types"
import { QuizResponse } from "./QuizResponse"
import { theme } from "../../util"



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
    borderRadius: 20,
    alignSelf: 'center',
    paddingVertical: 20,
    marginHorizontal: 10,
    flexDirection: 'column',
    backgroundColor: theme.brown_base,
  }
})