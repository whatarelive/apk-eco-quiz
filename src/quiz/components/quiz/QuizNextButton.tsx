import { View, Image, StyleSheet, TouchableNativeFeedback } from "react-native";
import { useNavigate } from "react-router-native";
import { useIconChange, useImage } from "../../hooks";
import { theme } from "../../../util";
import { QuizNextButtonProps } from "../../types";
import { useContext } from 'react';
import { NextQuizContext } from "../../context/NextQuizContext";
import { ScoreContext } from "../../context/ScoreContext";




export const QuizNextButton = ({ icon1, icon2, category, questionA, question, setQuestion }: QuizNextButtonProps ): JSX.Element => {

  const navigate = useNavigate();
  const { counter, response, setResponse } = useContext( ScoreContext );
  const { active, setActive } = useContext( NextQuizContext );

  const { icon } = useIconChange( icon1, icon2 );
  const image = useImage( icon, 'uiImage' );

  const enableAction = ( !active.enable ) ? theme.brown_ligt : theme.brown_veryDark;


  const handleClick = async() => {
    setResponse({
      ...response,
      categoryID: category.id.toString(),
      responseID: questionA.id,
      respID: active.refId
    })

    console.log( counter );
    
    setActive({
      ...active,
        enable: false,
        blocked: false,
        refId: '',
    });

    console.log( counter );
    console.log('--------');
    
    
    if ( question === 5 ) navigate(`/victory/${counter}`); 

    setQuestion( question + 1 );

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