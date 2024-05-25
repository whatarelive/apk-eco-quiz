import { View, Image, StyleSheet, TouchableNativeFeedback } from "react-native";
import { useNavigate } from "react-router-native";
import { useContext } from 'react';
import { useIconChange, useImage } from "../../hooks";
import { theme } from "../../../util";
import { QuizNextButtonProps } from "../../types";
import { NextQuizContext, ScoreContext } from "../../context";




export const QuizNextButton = ({ icon1, icon2, question, setQuestion }: QuizNextButtonProps ): JSX.Element => {

  const navigate = useNavigate();
  const { score, responseTime } = useContext( ScoreContext );
  const { active, setActive } = useContext( NextQuizContext );

  const { icon } = useIconChange( icon1, icon2 );
  const image = useImage( icon, 'uiImage' );

  const handleClick = () => {
    console.log(`Score: ${ score.current }`);
    console.log(`Tiempo: ${ responseTime.current }`);  

    setActive({
      ...active,
        enable: false,
        blocked: false,
        refId: '',
    });

    console.log('--------');
    
    if ( question === 5 ) navigate(`/victory/${score.current}/${responseTime.current}`); 

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