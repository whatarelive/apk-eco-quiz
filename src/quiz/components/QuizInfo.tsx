import { Text, View, StyleSheet } from "react-native";
import { align, colors } from "../../util";
import { QuizInfoProps } from "../types";



export const QuizInfo = ( { id }: QuizInfoProps ): JSX.Element => {

  return (
    <View style={ styles.container }> 
      <View style={ styles.subContainer }>
        <Text 
            style={ styles.text }>
            {`Quiz: #${id}`}
        </Text>
        <Text 
            style={ styles.crono }>
            {'03:00 min'}
        </Text>
      </View>

      <View 
        style={ styles.separador }>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        ...align.relative,
        paddingHorizontal: 10,
        height: '10%'
    },
    subContainer: {
        width: '100%',
        flexDirection: 'row',
    },
    text: {
        flex: 1,
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'left',
        paddingHorizontal: 10,
    },
    crono: {
        flex: 1,
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'right',
        paddingHorizontal: 10,
    },
    separador: {
        width: '90%',
        height: 3,
        backgroundColor: colors.acent
    }
});