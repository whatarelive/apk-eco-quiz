import { View, Text, StyleSheet } from "react-native"
import { useNavigate, useParams } from 'react-router-native';
import { useState } from "react";
import { StatusBar, theme } from "../../util";
import { QuizNextButton, QuizHeader, QuizInfo, QuizListResponse } from '../components';
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
          
        <View style={{ flex: 1, marginBottom:36,  borderRadius: 20, backgroundColor: theme.brown_base, flexDirection: 'column', alignItems: 'center'}}>
          <QuizListResponse respuestas={ questionA.respuestas } />

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <Text>3:45</Text>
            <QuizNextButton icon1={"arrow_forward"} icon2={"arrow_forward"} onClick={ handleClick }/>
          </View>
        </View>
      </View> 
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    padding: 1,
    flexDirection: 'column',
    backgroundColor: theme.brown_ligt
  },
  question: {
    marginHorizontal: 20,
    minHeight: '10%',
    maxHeight: '10%',
    alignSelf: 'center',
    marginBottom: '10%',
    textAlign: 'left',
    fontSize: 24,
    fontFamily: 'Rubik',
    fontWeight: '300',
    color: theme.brown_veryDark
  }
})