import { View, Image, TouchableNativeFeedback, StyleSheet } from "react-native"
import { useContext } from "react";
import { NextQuizContext, ScoreContext } from "../../context";
import { QuizCheckButtonProps } from "../../types";
import { theme, useImage } from "../../../util";
import { getResponseStatus } from "../../helpers/getResponseStatus";
import { RFValue } from 'react-native-responsive-fontsize';




export const QuizCheckButton = ({ category, questionA }: QuizCheckButtonProps ): JSX.Element => {

    const { incrementScore, decrementScore, updateAciertos } = useContext( ScoreContext );
    const { active, setStatus } = useContext( NextQuizContext );

    const image = useImage( 'check', 'uiImage' );

    const enableAction = ( !active.enable ) ? theme.brown_ligt : theme.green_base;

    const handleClick = () => {
        const status = getResponseStatus( category.id.toString(), questionA.id, active.refId );
      
        if ( status ) {
            incrementScore( 60 );
            updateAciertos( 1 );
            
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
    width: RFValue(55),
    height: RFValue(55),
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: RFValue(28),
    height: RFValue(28)
  }
})
