import { View, Text, StyleSheet } from "react-native"
import { useNavigate, useParams } from 'react-router-native';
import { StatusBar } from "../../util";
import { CustomButton, QuizHeader, QuizInfo, QuizResponse } from '../components';
import { getCategoryById } from "../helpers/getCategoryById";
import { getQuestionById } from "../helpers/getQuestionById";
import { useState } from "react";



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

      <View style={{ flexDirection: 'column' }}>
        <QuizHeader title={ category.name }/>
        
        <QuizInfo id={questionA.id}/>      
        
        <Text style={ styles.question }>{`Pregunta #${ questionA.id }: ${ questionA.pregunta }`}</Text>

        {/*  Quiz Reponses  */}
        <View style={ styles.response }>
          {
            questionA.respuestas.map( resp => (
              <QuizResponse key={ resp.id } resp={ resp }></QuizResponse>
            ))
          }
        </View>

          {/*  Next Quiz Question */} 
        <CustomButton 
          title="Submit" 
          handleClick={ handleClick }
        />
      </View> 
    </>
  )
}

const styles = StyleSheet.create({
  question: {
    position: 'relative',
    fontSize: 20,
    padding: 10,
    width: 'auto',
    minHeight: '10%',
    alignSelf: 'center',
    textAlign: 'left',
    justifyContent: 'center',
    fontWeight: '600',
  },
  response: {
    flexDirection: 'column',
    position: 'relative',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '95%',
    height: '50%',
    marginBottom: '15%',
  }
})