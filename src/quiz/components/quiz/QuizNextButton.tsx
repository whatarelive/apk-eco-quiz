import { View, Image, StyleSheet, TouchableNativeFeedback } from "react-native";
import { useNavigate } from "react-router-native";
import { useContext } from 'react';
import { theme, useImage } from "../../../util";
import { QuizNextButtonProps } from "../../types";
import { NextQuizContext, ScoreContext } from "../../context";
import { RFValue } from 'react-native-responsive-fontsize';




export const QuizNextButton = ({ question, setQuestion }: QuizNextButtonProps ): JSX.Element => {

  const navigate = useNavigate();
  const { active, setStatus, setActive } = useContext( NextQuizContext );
  const { score, responseTime, aciertos } = useContext( ScoreContext );

  const image = useImage( 'arrow_forward', 'uiImage' );

  const handleClick = () => {
    setActive({
      ...active,
        enable: false,
        blocked: false,
        refId: '',
    });

    console.log(`Score: ${ score.current }`);
    console.log(`Aciertos: ${ aciertos.current }`);
    console.log(`Tiempo: ${ responseTime.current }`);
    console.log('-------------');
    

    setStatus( false );
  
    if ( question === 5 ) navigate(`/victory`); 

    setQuestion( question + 1 );
  }

  return (
    <View style={{ ...styles.container, backgroundColor: theme.brown_veryDark }}>
      <TouchableNativeFeedback
        onPress={ handleClick }
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