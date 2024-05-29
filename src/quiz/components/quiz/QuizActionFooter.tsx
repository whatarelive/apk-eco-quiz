import { View, StyleSheet } from "react-native"
import { QuizNextButton } from "./QuizNextButton"
import { QuizActionFooterProps } from "../../types"
import { QuizCrono } from "./QuizCrono"
import {  useContext, useEffect, useState } from 'react';
import { QuizCheckButton } from "./QuizCheckButton";
import { NextQuizContext } from "../../context";
import { RFPercentage } from 'react-native-responsive-fontsize';




export const QuizActionFooter = ({ category, questionA, question, setQuestion }: QuizActionFooterProps): JSX.Element => {

  const [ restart, setRestart ] = useState(0);
  const { status, setStatus }  = useContext( NextQuizContext );

  useEffect(() => {
    setRestart( restart + 1 )
    setStatus( false );
  }, [ question ])
  

  return (
    <View style={ styles.container }>
      <QuizCrono 
        restart={ restart }
        category={ category }
        question={ question }
        setQuestion={ setQuestion }
      />

      {
        !status 
        ? <QuizCheckButton category={ category } questionA={ questionA } />
        : <QuizNextButton category={ category } question={ question } setQuestion={ setQuestion } />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: RFPercentage(40),
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: '10%',
    justifyContent: 'space-evenly',
  }
});
