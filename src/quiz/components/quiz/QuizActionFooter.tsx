import { View, StyleSheet } from "react-native"
import { QuizNextButton } from "./QuizNextButton"
import { QuizActionFooterProps } from "../../types"
import { QuizCrono } from "./QuizCrono"
import {  useContext, useEffect, useState } from 'react';
import { QuizCheckButton } from "./QuizCheckButton";
import { NextQuizContext } from "../../context";




export const QuizActionFooter = ({ category, questionA, question, setQuestion }: QuizActionFooterProps) => {

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
        question={ question } 
        setQuestion={ setQuestion }
      />

      {
        !status 
        ? <QuizCheckButton icon1={"check"} icon2={"check"} category={ category } questionA={ questionA } question={ question } setQuestion={ setQuestion } />
        : <QuizNextButton icon1={"arrow_forward"} icon2={"arrow_forward"} category={ category} questionA={ questionA } question={ question } setQuestion={ setQuestion } />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: '85%',
    paddingLeft: 30,
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
  }
});
