import { View, Text, StyleSheet } from "react-native"
import { useNavigate, useParams } from 'react-router-native';
import { useState } from "react";
import { StatusBar, theme } from "../../util";
import { QuizHeader, QuizInfo, QuizListResponse } from '../components';
import { getCategoryById, getQuestionById } from "../helpers";



export const QuizScreen = (): JSX.Element => {

  const { categoryId, questionId } = useParams();
  const navigate = useNavigate();

  if ( !questionId ) {
    throw new Error(`${questionId} is not valid ID for Question Array`);
  }

  const [ question , setQuestion ] = useState( +questionId );
  
  const category = getCategoryById( categoryId );
  const questionA = getQuestionById( question, category );
  

  const handleClick = () => {
    if ( question === 5 ) navigate('/victory'); 
    setQuestion( question + 1 );
  }

  return (
    <>
      <StatusBar/>

      <View style={ styles.container }>
        <QuizHeader title={ category.name }/>
        
        <QuizInfo id={ questionA.id } total={ 5 } />    
        
        <Text style={ styles.question }>{ questionA.pregunta }</Text>
          
        <QuizListResponse respuestas={ questionA.respuestas } />

        <View>

        </View>
      </View> 
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    backgroundColor: theme.brown_ligt
  },
  question: {
    marginHorizontal: 20,
    marginBottom: '20%', 
    alignSelf: 'center',
    textAlign: 'left',
    fontSize: 21,
    fontWeight: '600',
    color: theme.brown_veryDark
  }
})