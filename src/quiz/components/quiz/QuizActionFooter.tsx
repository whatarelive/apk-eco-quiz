import { View, StyleSheet } from "react-native"
import { QuizNextButton } from "./QuizNextButton"
import { QuizActionFooterProps } from "../../types"
import { QuizCrono } from "./QuizCrono"
import { useEffect, useState } from 'react';




export const QuizActionFooter = ({ category, questionA, question, setQuestion }: QuizActionFooterProps) => {

  const [restart, setRestart] = useState(0);

  useEffect(() => {
    setRestart( restart + 1 )
  }, [ question ])
  

  return (
    <View style={ styles.container }>
      <QuizCrono restart={ restart }
        category={ category}
        questionA={ questionA } 
        question={ question } 
        setQuestion={ setQuestion }/>

      <QuizNextButton 
        icon1={"arrow_forward"} 
        icon2={"arrow_forward"}
        category={ category}
        questionA={ questionA }
        question={ question } 
        setQuestion={ setQuestion } 
      />
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
