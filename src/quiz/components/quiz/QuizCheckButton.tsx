import { View, Image, TouchableNativeFeedback, StyleSheet } from "react-native"
import { useContext } from "react";
import { NextQuizContext, ScoreContext } from "../../context";
import { QuizCheckButtonProps } from "../../types";
import { theme, useImage } from "../../../util";
import { getResponseStatus } from "../../helpers/getResponseStatus";




export const QuizCheckButton = ({ category, questionA }: QuizCheckButtonProps ): JSX.Element => {

    const { incrementScore, decrementScore } = useContext( ScoreContext );
    const { active, setStatus } = useContext( NextQuizContext );

    const image = useImage( 'check', 'uiImage' );

    const enableAction = ( !active.enable ) ? theme.brown_ligt : theme.green_base;

    const handleClick = () => {
        const status = getResponseStatus( category.id.toString(), questionA.id, active.refId );
      
        if ( status ) {
            incrementScore( 60 );
        } else if( !status ) {
            decrementScore( 80 );
        }

        setStatus( true );
    }

  return (
    <View style={{ ...styles.container, backgroundColor: enableAction }}>
      <TouchableNativeFeedback
        onPress={() => active.enable && handleClick() }
      >
        <Image
          source={ image }
          style={ styles.icon }/>
      </TouchableNativeFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 64,
    height: 64,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 34,
    height: 34
  }
})
